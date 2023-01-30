---
layout: post
title:  "Manual Digital Illustrations"
date:   2013-10-08
category: illustration
---

{% for i in (1..5) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>