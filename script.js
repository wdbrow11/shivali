var shoutouts = [
  "You are so fun to talk to about all kinds of things and you",
  "this is me lmao",
  "your photo gallery was really good!",
  "Your amazing ideas. You always have a good idea on hand.",
  "Your random generator site is awesome!! You are also super cool.",
  "how you treat everyone so respectfully!",
  "You work very efficiently in group projects and we get things done fast.",
  "how I can talk about debate and Milpitas gossip with you. And for all your help during our random message generator.",
  ",that you put tons of effort into your projects",
  "How nice you and that you're easy to talk to!",
  "Your creativity and kindness.",
  "How it's super easy and fun to talk and work with you!",
  "amazing ability to help me even when you have work to do. I reaaly appreciate it and without your help I highly doubt I would be able to complete my project.",
  "Your passion and persistence. You never give up and are always trying to take risks and think out of the box and I really admire that."
]

for (x of shoutouts) {
  $("#shoutout-container").append("<p>" + x + "</p> <br>");
}
