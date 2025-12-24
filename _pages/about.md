---
layout: about
permalink: /
title: <strong>Seokju</strong> Lee
description: Graduate Student | KAIST | MSC Lab

profile:
  align: right
  image: image.jpg
  address: #mention address

news: true
social: true
years: [2025, 2023, 2022]
---

I am currently a PhD student at [KAIST](https://www.kaist.ac.kr/en/), advised by Prof. [Kyung-Soo Kim](http://msc.kaist.ac.kr/).

My research focuses on control and state estimation for legged robots, particularly on developing agile and dynamic motions for quadruped robots and humanoids. I'm also interested in reinforcement learning frameworks to enable robots to reason about their body dynamics and interactions with complex environments, ultimately achieving more adaptive and versatile behaviors.

If you have any questions or would like to discuss ideas, feel free to reach out via
[email](dltjrwn0322@kaist.ac.kr)!

<div class="post">

  {% if page.news %}
    {% include news.html %}
  {% endif %}

</div>

---

{: #publications}
## __selected publications__

{% for y in page.years %}
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
