---
layout: post
title:  "Some of Logos"
date:   2014-05-12
category: brand-identity
---

{% for i in (1..7) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>