import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormspree } from "@formspree/react";
import { useForm, Controller } from "react-hook-form";
import { Form } from "@/components/core/Form/Form";
import { TextInput } from "@/components/core/TextInput/TextInput";
import { TextArea } from "@/components/core/TextArea/TextArea";
import { Text } from "@/components/core/Text/Text";
import { Button } from "@/components/core/Button/Button";
import { PiSpinnerBold } from "react-icons/pi";
import { VStack, styled } from "@/styled-system/jsx";
import { useToast } from "@/components/core/Toast/Toast.hooks";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ error: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export const ContactForm = () => {
  const { toast } = useToast();

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues,
  });

  const { client } = useFormspree();

  const onSubmit = async (data: ContactFormData) => {
    const result = await client.submitForm(
      import.meta.env.VITE_CONTACT_FORM_ID ?? "",
      data,
    );
    if (result.kind === "success") {
      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. We will get back to you soon.",
        variant: "success",
      });
      reset(defaultValues);
    } else {
      const formErrs = result.getFormErrors();
      console.log({ formErrs });
      for (const { code, message } of formErrs) {
        setError(`root.${code}`, { type: code, message });
      }
      const fieldErrs = result.getAllFieldErrors();
      for (const [field, errs] of fieldErrs) {
        setError(field, { message: errs.map((e) => e.message).join(", ") });
      }
      if (!formErrs.length) {
        toast({
          title: "Error!",
          description: "Something went wrong. Please try again later",
          variant: "danger",
        });
      }
    }
  };

  return (
    <Form maxW="md" mx="auto" spaceY="5" onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems="flex-start" gap="1">
        <Text as="label" htmlFor="name" fontWeight="semibold">
          Name
        </Text>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type="text"
              id="name"
              placeholder="Enter your name"
              w="full"
            />
          )}
        />
        {errors?.name?.message ? (
          <Text color="red.600" mb="-2.5" fontSize="sm">
            {errors.name.message}
          </Text>
        ) : null}
      </VStack>
      <VStack alignItems="flex-start" gap="1">
        <Text as="label" htmlFor="email" fontWeight="semibold">
          Email
        </Text>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextInput
              {...field}
              type="email"
              id="email"
              placeholder="Enter your email"
              w="full"
            />
          )}
        />
        {errors?.email?.message ? (
          <Text color="red.600" mb="-2.5" fontSize="sm">
            {errors.email.message}
          </Text>
        ) : null}
      </VStack>
      <VStack alignItems="flex-start" gap="1">
        <Text as="label" htmlFor="textInput" fontWeight="semibold">
          Message
        </Text>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextArea
              {...field}
              id="reason"
              placeholder="Enter your message"
              w="full"
              zIndex="2"
            />
          )}
        />

        {errors?.message?.message ? (
          <Text color="red.600" mb="-2.5" fontSize="sm">
            {errors?.message?.message}
          </Text>
        ) : null}
      </VStack>
      <Button type="submit" w="full" p="0" disabled={isSubmitting}>
        {isSubmitting ? (
          <styled.div animation="spin" animationDelay="faster">
            <PiSpinnerBold size={21} />
          </styled.div>
        ) : (
          "Send Message"
        )}
      </Button>
    </Form>
  );
};
