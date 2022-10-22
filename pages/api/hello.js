export default function handler(req, res) {
    const advice = [
        "About 99% of the time, the right time is right now.",
        "No one is as impressed with your possessions as you are.",
        "Dont ever work for someone you dont want to become.",
        "Cultivate 12 people who love you, because they are worth more than 12 million people who like you.",
        "Dont keep making the same mistakes; try to make new mistakes.",
        "If you stop to listen to a musician or street performer for more than a minute, you owe them a dollar.",
        "Anything you say before the word “but” does not count.",
        "When you forgive others, they may not notice, but you will heal. Forgiveness is not something we do for others; it is a gift to ourselves.",
        "Courtesy costs nothing. Lower the toilet seat after use. Let the people in the elevator exit before you enter. Return shopping carts to their designated areas. When you borrow something, return it better shape (filled up, cleaned) than when you got it.",
        "Whenever there is an argument between two sides, find the third side.",
        "Efficiency is highly overrated; Goofing off is highly underrated. Regularly scheduled sabbaths, sabbaticals, vacations, breaks, aimless walks and time off are essential for top performance of any kind. The best work ethic requires a good rest ethic.",
        "When you lead, your real job is to create more leaders, not more followers."
    ]

    res.status(200).json({ text: advice[Math.floor(Math.random()*advice.length)] });
  }