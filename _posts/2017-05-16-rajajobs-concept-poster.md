---
layout: post
title:  "Rajajobs Concept Poster"
date:   2017-05-16
category: poster-design
---

{% for i in (1..2) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>