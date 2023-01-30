---
layout: "page"
title: Contact
permalink: /contact/
---

<h5>Thank you for visiting this site.</h5>
<p class="fs-6">If you have any questions or just want to say hello to me, please use the form below or send it to <a href="mailto:rowenadinata@gmail.com">rowenadinata@gmail.com</a></p>

<small><em>* mandatory fields are required</em></small>
<br />
<form action="https://getform.io/f/ba87c777-6982-4242-8b38-452cdeb96b55" method="POST">
    <div class="form-floating mb-3">
        <input type="text" class="form-control" name="name" id="floatingInput" placeholder="your name" required>
        <label for="floatingInput">Your Name *</label>
    </div>
    <div class="form-floating mb-3">
        <input type="email" class="form-control" name="email" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput">Email address *</label>
    </div>
    <div class="form-floating mb-3">
        <input type="text" class="form-control" name="name" id="floatingInput" placeholder="subject" required>
        <label for="floatingInput">Subject *</label>
    </div>
    <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" name="message" id="floatingTextarea" style="height: 200px" required></textarea>
        <label for="floatingTextarea">Messages *</label>
    </div>  
    <!-- add hidden Honeypot input to prevent spams -->
    <input type="hidden" name="_gotcha" style="display:none !important">
    <br/>
    <button type="submit" class="btn btn-dark">Send</button>
</form>