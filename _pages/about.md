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

I am currently a PhD student in [Mechatronics, Systems and Control Lab (MSC Lab)](https://msc.kaist.ac.kr/) at [KAIST](https://www.kaist.ac.kr/en/), advised by Prof. [Kyung-Soo Kim](http://msc.kaist.ac.kr/).

My research focuses on control and state estimation for legged robots, particularly on developing agile and dynamic motions for quadruped robots and humanoids. I'm also interested in reinforcement learning frameworks to enable robots to reason about their body dynamics and interactions with complex environments, ultimately achieving more adaptive and versatile behaviors.

If you have any questions or would like to discuss ideas, feel free to reach out via
[email](dltjrwn0322@kaist.ac.kr)!

<!-- Anchor for top of page -->
<div id="top"></div>

<section id="about" class="about-section">
  <div class="post">

    {% if page.news %}
      {% include news.html %}
    {% endif %}

  </div>
</section>

---

{: #nav-publications}
## __publications__

<p style="font-size:0.9em;color:#6b6b6b;margin-top:0.15rem;">*representative publications are highlighted in <span style="background-color: rgba(250, 255, 110, 0.467); padding: 2px 5px; border-radius: 4px; color: #6b6b6b;">yellow</span>.</p>

{% include publications-static.html %}


---

<!-- explicit anchor to ensure reliable scrolling from other pages -->
<div id="projects-anchor"></div>

{: #nav-projects}
## __projects__

<!-- Projects shown by tag; horizontal sliders per category -->
<!-- Projects shown by specific categories -->
{% assign category_list = "Legged robotics,Autonomous & Mobile Robots,Robot Control & Simulators" | split: "," %}

{% for category in category_list %}
  <section class="project-row">
    <div class="row-header">
      <h4>{{ category }}</h4>
    </div>
    <div class="project-slider" data-tag="{{ category }}">
      {% assign sorted_projects = site.projects | sort: 'duration' | reverse %}
      
      <!-- First render pinned projects -->
      {% for p in sorted_projects %}
        {% if p.category == category and p.pinned == true %}
          {% include project-card.html project=p %}
        {% endif %}
      {% endfor %}

      <!-- Then render remaining projects -->
      {% for p in sorted_projects %}
        {% if p.category == category and p.pinned != true %}
          {% include project-card.html project=p %}
        {% endif %}
      {% endfor %}
    </div>
  </section>
{% endfor %}

