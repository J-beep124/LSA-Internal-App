# LSA AI Hub Starter

A Vercel-ready Next.js starter app based on the Lawn Solutions Australia AI integration plan.

## What is included

- A clean dashboard homepage
- Division modules seeded from the PowerPoint plan
- Sample project tracking page
- Sample reminders page
- Mock AI API route at `/api/ai-assistant`
- Tailwind styling for fast iteration

## Recommended next stack

For production, I would suggest:

- **Vercel** for hosting
- **Supabase** for database, auth and file storage
- **OpenAI API** for summaries, drafting and internal knowledge tools
- **Resend** or another email service for notifications

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Create a new GitHub repo.
2. Upload these files.
3. Import the repo into Vercel.
4. Deploy.

## Best next build steps

1. Add login and user roles for leadership, marketing, operations and field staff.
2. Replace sample data in `lib/data.ts` with Supabase tables.
3. Connect the AI endpoint to OpenAI.
4. Add modules in this order:
   - lead handling
   - weekly management rhythm
   - grower management
   - purchasing and operations
   - R&D photo and variety intelligence
5. Add mobile-friendly forms for field staff and growers.

## Suggested database tables

- users
- divisions
- projects
- tasks
- reminders
- grower_visits
- grower_notes
- rnd_trials
- rnd_photos
- purchases
- safety_reports
- ai_prompts_log

## Notes

This starter is intentionally simple so you can upload it to Vercel fast and keep building from a solid base.
