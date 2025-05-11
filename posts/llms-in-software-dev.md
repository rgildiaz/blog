---
title: "LLMs (can) make you a worse developer"
date: "2024-09-13"
---

Alternative titles:
- _ChatGPT is dumber than you_
- _When you give a tech bro free labor..._
- _Copilot will take a metal bat to your kneecaps if you're not careful_

~

I hate hype. 

Especially in the tech industry, hype is inevitable and unavoidable. A new startup gets some crazy amount of funding from investors. Somebody tweets about it and it goes viral. Then a stampede of similar products rush out of Silicon Valley and attempt to capitalize on the over-optimism of early adopters. New products flood the market until the VC money runs out, and then the hype train slowly dies away. The cycle repeats a few years later with another startup in slightly different clothes.

As much as I hate this endless cycle of hype, I can sometimes convince myself that its probably a net positive for the tech industry if not the world at large. Even if the hype-cycle spins forever, like a stationary bike powered by dead sea turtles and unpaid children in third-world countries, the optimist in me says that new technology can help people live better, safer, free-er lives. 

To some, LLMs are like a godsend. I just ask this thing to make `<GENERIC_APP>` and it tells me how? Wow! 

But for software engineers, I think that LLMs are reaching the limit of their usefulness.

If you write code for a living, be wary of over-relying on LLMs. Otherwise, the AI-cycle might just run you over and leave you crawling your way from LLM to LLM for the rest of your career.

## Your software will change

Something that stuck with me from a (much more) senior engineer at work is that

> _software engineering is programming over time._

If programming solves a problem at a point in time, software engineering solves an inevitably changing problem over a length of time.

In a professional setting, that translates to:

> _You will need to edit your code no matter how perfectly you build your app._

Projects that live for any amount of time need maintenance: requirements will change, an API will be deprecated, and that thing you wrote five months ago will need to be refactored to handle more or bigger or differently-formatted data. Regardless of the reason for change, your software will need to adapt to new circumstances. Part of your job is making that as easy as possible.

It can be very tempting to reach for an LLM as a way to churn out a lot of code very quickly. Copy, paste, repeat. Do this enough, and eventually something will work.

This might be a good idea if you have to solve one problem once. But if you plan on maintaining a tool (and even if you never want to see this code again), future you will greatly appreciate the understanding you will gain through solving problems now. 

When writing software that will be used in a business setting, you or whoever comes after you essentially always will need to maintain the tools you build. While there's no way to remember everything you had in mind while working on an old project, copy-pasting code given to you by magical means with little explanation _guarantees_ that you won't.

**tldr;** using an LLM while working is not necessarily bad. Copy-pasting code without understanding how it works is bad. In my experience, there is a definite inverse correlation between AI-reliant engineers and their understanding of the code they push.

**tldr tldr;** good code is written with empathy. Computers cannot feel empathy.

## You are not average

Do you know how much _horrific_ code is on the internet? I think it's pretty much impossible to quantify. 

Infinitely nested loops? Yup, we got those. 800 line functions with single-character variables and no comments in sight? 800 is rookie numbers. Want free OpenAI API access? Leaked API keys are only one GitHub search away.

Most people who have programmed pick it up just to try it out, working on some project or tutorial for a bit before moving on with their lives. And that's 100,000% ok! We'll all forever be beginners at something for the rest of our lives. It's normal to try something and decide it isn't for you, and it's probably healthier to skip coding than it is to sit at a computer getting carpal tunnel all day. 

_However_, if you make it through tutorial hell, you're likely above average. If you write code for a living, you're _very_ likely above average.

LLMs are statistical models. They take in a bunch of data and spit out the most likely answer. When trained on the freely-available code on the internet, a lot of that input data is kinda garbage. I'm sure you've heard the saying _"garbage in, garbage out"_.

Sure, if you're new to a language or a framework or a field, then you're a beginner. But investing the time to learn while using that tool for 8 hours a day gives you more than enough time to learn and become _✨above average✨_ with enough time.

Once you get there, an LLM cannot replace you.

**tldr;** LLMs produce the average of their training data. If you code full-time, it's not difficult to become better than average at coding.

**tldr tldr;** get good, scrub.

## You have so much to learn

I don't hate LLMs. It really feels like magic sometimes when having just a normal conversation with one. When learning new things, ChatGPT or similar projects can be great tools for having a conversation with something who is kinda an expert in everything. 

I often use ChatGPT to ask general questions that would be hard to Google, or when I need to spot some error that my editor can't see. For these purposes, ChatGPT can feel like a great senior engineer, pointing you in the right direction and helping you figure out why things are breaking when you've reached your limit.

However, ChatGPT _is not_ a senior engineer. It might produce a lot of code if you ask it, but it's definitely [more expensive](https://finance.yahoo.com/news/report-claims-openai-burned-8-105046378.html) and it definitely doesn't care about how much you learn in the long term.

Using ChatGPT is an exercise in asking the right questions. Notoriously, LLMs will tell you pretty much what you want to hear. If you ask ChatGPT to solve a problem by writing some code, you will (sometimes) get a working solution. If you ask ChatGPT to teach you something, it will give you teaching-material-adjacent text.

Text is great (reading is fun!), but understanding comes from the journey of trying and failing, not from reaching your end goal. If you practice asking for answers, you will become better at asking for answers. If you practice searching for existing answers, you will become better at that instead.

I've been writing this in one sitting, and to be honest I'm getting very tired now, so let me just write out my point instead of trying to say it in exactly the way I want to:

**tldr;** Reliance on LLM-generated code does not lead to understanding of the resulting software, and it limits your long-term learning.

**tldr tldr;** don't make your teacher do your homework.

## The big **tldr;**

1. When your code needs to change, you better understand why you made the decisions you did.
2. You are almost definitely a better programmer than your LLM.
3. You can learn a lot from an LLM, but copy-pasting isn't learning.

For your long-term career success, it's much better to learn how to do things for yourself than it is to rely on prompt engineering an LLM.

~

_Anyway, this is all just my opinion_
