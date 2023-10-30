---
layout: ../../layouts/TilLayout.astro
title: Beginning with liveviews
date: 2022-12-28T05:00:00.000Z
author: Fredy Bustos
image:
  alt: image
  src: /images/dog.jpg
description:  Phoenix is an interactive web applications quickly, with less code and fewer moving parts
---

# Phoenix framework!

Build rich, interactive web applications quickly, with less code and fewer moving parts. Join our growing community of developers using Phoenix to craft APIs, HTML5 apps and more, for fun or at scale.


```elixir
  defmodule MyAppWeb.DemoLive do
  use Phoenix.LiveView

  def render(assigns) do
    ~H"""
    Hello world!
    """
  end
end
```