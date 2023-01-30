---
layout: post
title:  "ACNA Auction Booklet 2015"
date:   2015-10-02
category: printing-collateral
---

{% for i in (1..7) %}
  <img class="img-fluid mx-auto d-block" src="{{ site.imageurl }}{{ page.title | replace: ' ', '-' | downcase }}/{{ i }}.jpg" alt="{{ page.title }}" >
{% endfor %}
<hr>
<p>Category: <a href="/category/{{ page.category }}">{{ page.category | replace: '-', ' ' | capitalize }}</a></p>