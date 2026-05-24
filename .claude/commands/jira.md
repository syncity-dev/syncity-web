# Pull Jira Ticket

Fetch and display the Jira ticket: $ARGUMENTS

## Steps

1. Use the env vars `$JIRA_EMAIL`, `$JIRA_API_TOKEN`, and `$JIRA_BASE_URL` (all set in the shell).
2. Run:

```bash
curl -s -u "$JIRA_EMAIL:$JIRA_API_TOKEN" \
  "${JIRA_BASE_URL}rest/api/3/issue/$ARGUMENTS" \
  | python3 -c "
import json, sys

def extract_text(node):
    if not node:
        return ''
    if isinstance(node, str):
        return node
    if node.get('type') == 'text':
        return node.get('text', '')
    result = ''
    for child in node.get('content', []):
        result += extract_text(child)
    if node.get('type') in ('paragraph', 'heading', 'listItem', 'bulletList', 'orderedList'):
        result += '\n'
    return result

d = json.load(sys.stdin)
f = d['fields']
print('Summary:', f['summary'])
print('Status:', f['status']['name'])
print('Type:', f['issuetype']['name'])
print('Assignee:', (f.get('assignee') or {}).get('displayName', 'Unassigned'))
print()
desc = f.get('description')
if desc:
    print('Description:')
    print(extract_text(desc))
"
```

3. Present the output clearly — summary, status, assignee, then the full description. If the ticket has acceptance criteria, call them out explicitly.
4. After displaying, ask: "Ready to start on this?" unless the user has already indicated they want to proceed.
