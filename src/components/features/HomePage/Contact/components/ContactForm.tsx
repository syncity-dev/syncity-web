import { useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/core/Button/Button';
import { Form } from '@/components/core/Form/Form';
import { Icon } from '@/components/core/Icon/Icon';
import { Label } from '@/components/core/Label/Label';
import { Text } from '@/components/core/Text/Text';
import { TextArea } from '@/components/core/TextArea/TextArea';
import { TextInput } from '@/components/core/TextInput/TextInput';
import { ProjectTypeSelect } from '@/components/features/HomePage/Contact/components/ProjectTypeSelect';
import { Grid, VStack } from '@/styled-system/jsx';

const defaultValues = {
  name: '',
  email: '',
  projectType: '',
  message: '',
};

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email({ error: 'Invalid email address' }),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Project type is required'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { client } = useFormspree();

  const {
    handleSubmit,
    control,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  if (submitted) {
    return (
      <VStack gap="4" py="8" mt="-8" alignItems="center" textAlign="center">
        <CheckCircle size={48} />
        <Text fontWeight="semibold" fontSize="lg">
          Message sent!
        </Text>
        <Text color="fg.muted">
          Thanks for reaching out. We'll get back to you within 1 business day.
        </Text>
      </VStack>
    );
  }

  const onSubmit = async (data: FormData) => {
    const result = await client.submitForm(import.meta.env.VITE_CONTACT_FORM_ID ?? '', data);
    if (result.kind === 'success') {
      reset(defaultValues);
      setSubmitted(true);
    } else {
      for (const { code, message } of result.getFormErrors()) {
        setError(`root.${code}`, { type: code, message });
      }
      for (const [field, errs] of result.getAllFieldErrors()) {
        setError(field as keyof FormData, { message: errs.map((e) => e.message).join(', ') });
      }
    }
  };

  return (
    <Form spaceY="6" onSubmit={handleSubmit(onSubmit)}>
      <Grid gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap="4">
        <VStack alignItems="flex-start" gap="1.5">
          <Label htmlFor="contact-name">Name</Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                id="contact-name"
                type="text"
                placeholder="Your name"
                w="full"
                aria-required="true"
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
            )}
          />
          {errors.name && (
            <Text id="contact-name-error" color="danger.default" fontSize="sm">
              {errors.name.message}
            </Text>
          )}
        </VStack>

        <VStack alignItems="flex-start" gap="1.5">
          <Label htmlFor="contact-email">Email</Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                id="contact-email"
                type="email"
                placeholder="your@email.com"
                w="full"
                aria-required="true"
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
            )}
          />
          {errors.email && (
            <Text id="contact-email-error" color="danger.default" fontSize="sm">
              {errors.email.message}
            </Text>
          )}
        </VStack>
        <VStack alignItems="flex-start" gap="1.5">
          <Label htmlFor="contact-company">Company</Label>
          <Controller
            name="company"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                id="contact-company"
                type="text"
                placeholder="Acme, Inc."
                w="full"
                aria-required="true"
                aria-describedby={errors.company ? 'contact-company-error' : undefined}
              />
            )}
          />
          {errors.email && (
            <Text id="contact-email-error" color="danger.default" fontSize="sm">
              {errors.email.message}
            </Text>
          )}
        </VStack>
        <VStack alignItems="flex-start" gap="1.5">
          <Label htmlFor="contact-project-type">Project type</Label>
          <Controller
            name="projectType"
            control={control}
            render={({ field: { value, onChange, ...fieldRest } }) => (
              <ProjectTypeSelect
                {...fieldRest}
                value={[value]}
                onValueChange={(details) => onChange?.(details.value[0])}
                id="contact-project-type"
                aria-required="true"
                aria-describedby={errors.projectType ? 'contact-project-type-error' : undefined}
              />
            )}
          />
          {errors.projectType && (
            <Text id="contact-project-type-error" color="danger.default" fontSize="sm">
              {errors.projectType.message}
            </Text>
          )}
        </VStack>

        <VStack alignItems="flex-start" gap="1.5" gridColumn={{ base: '1', sm: '1 / -1' }}>
          <Label htmlFor="contact-message">What are you building?</Label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextArea
                {...field}
                id="contact-message"
                placeholder="A few sentences is enough — we'll follow up with the rest."
                w="full"
                aria-required="true"
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                minHeight="32"
              />
            )}
          />
          {errors.message && (
            <Text id="contact-message-error" color="danger.default" fontSize="sm">
              {errors.message.message}
            </Text>
          )}
        </VStack>
      </Grid>

      <Button
        type="submit"
        w="full"
        size="lg"
        variant="solid"
        isLoading={isSubmitting}
        loadingText="Sending"
      >
        Send message{' '}
        <Icon asChild>
          <ArrowRight />
        </Icon>
      </Button>
    </Form>
  );
};
