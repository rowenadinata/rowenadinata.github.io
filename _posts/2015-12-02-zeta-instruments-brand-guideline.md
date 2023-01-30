---
layout: post
title:  "Zeta Instruments Brand Guideline"
date:   2015-12-02
category: brand-identity
---

{% for i in (1..14) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>