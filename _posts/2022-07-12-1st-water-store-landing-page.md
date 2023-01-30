---
layout: post
title:  "1st Water Store Landing Page"
date:   2022-07-12
category: website-user-interface
---

<h5 class='text-center p-4'>Link to <a class="link-secondary" href="https://waterstore.site" target="_blank">Website</a></h5>

{% for i in (1..5) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>