const messages = [
    "Maybe you’re waiting at the airport, and the book cover caught your attention",
    "No. I actually don’t know why you’re reading this book",
    "You believe in something else",
    "You believe you have the desire to change, the ability to succeed, and that you can be a better version of yourself.",
    "You believe you have the power to unlock your destiny.",
    "Now, you might have read a lot of different books on success, selfimprovement,wealth, and business already.",
    "Do you feel, deep down, that there’s still a piece missing?",
    "I don’t claim to be a super original thinker",
    "The truth is, I think originality is highly overrated.",
    "No, I’m not an original thinker. I’m an entrepreneur",
    "Most books will tell you to do this and don’t do that; don’t do this and do that instead.",
    "My challenge as an educator is to change the way you think. Changing the way you think will alter the way you do things",
    "All I can do is come from my own experience.",
    "In my twenties. I published about a dozen books, including a bestselling book that sold over one hundred thousand copies worldwide.",
    "So why am I writing this book? Why now?",
    "Over the last decade, my mission has been to start a global economic movement by empowering people and developing their High-Income Skills",
    "I’ve heard countless stories of college students coming out of school, and not getting a job",
    "So they go back to school and get further into debt",
    "Now when they sit across the table from the employer, they are old, they have too much experience.",
    "So what should they do? They feel handcuffed even though they did what they were supposed to do.",
    "Overall, it’s just getting more challenging to run a business. Even successful entrepreneurs who have “made it” come up to me and share with me their concerns about staying in business.",
    "They’re not sure if the success they’ve built is going to last, how to sustain their success or how to take it to the next level.",
    "They know social media is powerful, and they know a new way of doing business is emerging, but they’re not sure how to adapt to this change.",
    "I’ll introduce you to the six universal Wealth Archetypes.",
    "These are archetypes and profiles that will help you identify your relationship",
    "with money and where you are on your wealth journey.",
    "After you get clarity on where you are, you’ll be able to start the first step of the Wealth Triangle.",
    "The first step of the Wealth Triangle is attaining the High-Income",
    "Skill that will help you pay the bills. It’s a skill that will help you become",
    "recession-proof. Most successful CEOs and entrepreneurs didn’t start",
    "with a business as their first step; they began with a High-Income Skill.",
    "In chapter 3, you’ll learn about the power of a High-Income Skill and",
    "why debt problems are skill problems in disguise.",
    "But even within High-Income Skills, there is a meta-skill most",
    "people don’t have. That skill is the art of achieving maximum productivity.",
    "In chapter 6, you’ll learn how to achieve maximum results in",
    "minimum time. This chapter won’t be a chapter on time management",
    "far from it. You’ll see why productivity is self-mastery, and you’ll see",
    "how a few simple adjustments to your current routine could multiply",
    "your results.",
    "After achieving maximum personal productivity, you’ll learn how",
    "to achieve maximum financial productivity. Whether you want to",
    "move up in your company, become your own boss, or empower your",
    "employees with a powerful skill, this chapter will show you a new brand",
    "of sales. You’ll learn about High-Ticket ClosingTM and how you can close",
    "deals and negotiations more effectively without using any slimy, sleazy",
    "or high-pressure tactics."
];
const getRandomMessages = ()=>{
    const random = Math.random(Math.floor() * messages.length);
    const message = messages[random];
    return message;
}
export default getRandomMessages;