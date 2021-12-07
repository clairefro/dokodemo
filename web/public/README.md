# dokodemo

Async demo days for async teams, powered by Loom.

Submision for [loomSDK Holiday Hack](https://loomsdkholidayhack2021.devpost.com/)

## Dev

This app is built with [RedwoodJS](https://redwoodjs.com/)

### Getting started
`yarn install`

### Start dev server
`yarn rw dev`
### Run migrations
After editing `schema.prisma`:

`yarn rw prisma migration`

### Deploy
`yarn rw deploy netlify`
## Inspiration
"dokodemo" means "anywhere" in Japanese. No matter the team size, this app aims to help groups spread anywhere in any timezone come together for demo days and interact asynchronously.

The company I work for is entirely remote with team members located around the world. The most effective way we bond and have serendipitous encounters is through our bi-weekly demo days on Zoom. Anyone can volunteer for a slot to "show and tell" an accomplishment they made individually or with a team, whether it be a serious win or a fun hacky project. It's how we get to know people and projects in other teams and find cross-functional opportunities.

## Pain point
The only problem with our demo days is that they are split into two regions to accommodate opposite time zones. While the demo days are recorded, it's a hassle to download a chunky hour long video from the cloud and skim through them all - ergo half of the company doesn't know the other half very well.

## What it does
This app is a not-so-real-time watering hole for groups to show allows demo day organizers to create "Spaces" where company or team members can upload their demos. Spaces can be shared with the group so everyone can get up to speed on their own time while still getting to connect with one another with kudos, jokes and questions right inside the demos.

Loom is the PERFECT tool for asynchronous video demos that involve screensharing. Viewers can react in-video with emojis, comments and video replies, even if they don't have a Loom account.

*Ideally the organizer would be able to see which members showed up and track company engagement... didn't quite finish that part in time :)*

## How I built it
Slowly.

- [RedwoodJS](https://redwoodjs.com) (Typescript/React/GraphQL/Prisma)
- Netlify frontend/functions hosting
- Railway for Postgres DB

## Challenges I ran into
Initially I set out to make a realtime virtual expo space in Phaser where you can view Loom demos while walking around and chatting with other users, to make people really feel connected. I learned a lot about Phaser and building tilemaps... but decided realtime chat wasn't much value-add for asynchronous teams in wildly different timezones.

I pivoted to an app that would allow organizers of demo days to have engagement insights for their asynchronous teams. I spent too long learning a new framework and didn't implement all the features I had in mind.

Also, I wanted to use the Loom record SDK to keep all the activity in the app, but the current limitation of only being able to see the face bubble in the current window wasn't ideal for doing demos (the face is important!). That's OK, instead I redirect users to Loom so they can make a real account and start uploading :P

## Accomplishments that we're proud of
This is the deepest I've ever ventured into building and deploying a full-stack app with RedwoodJS.  I shared some of the learnings I had along the way ([ex.](https://community.redwoodjs.com/t/solved-dbauth-login-redirect/2539/9)). I'm super proud to have gotten database auth working with password resets and emails, even if the feature I had in mind for it wasn't implemented in time.

## What we learned
Spend less time in the weeds with your curiosities and maybe you'll actually finish a meaningful app MVP :)

## What's next for dokodemo
I fell short of all the features I wanted. I'd like to add these:

- Private spaces by org (SSO) or groups
- Mark watched demos for authed user so they know which are left to see
- Analytics view for space admin (How many employees attended a given demo day; Engagement trends over time;)
- Schedule a cut off time for submissions
- View archived demo days in your org
- Users can add tags to demos for searching later
- Explore public demo days
- Add a cute logo, of a buffalo or something
