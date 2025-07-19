<template>
    <section class="w-full bg-white py-16 px-6">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <!-- Left Side -->
            <div class="text-center md:text-left space-y-6">
            <h2 class="text-4xl md:text-5xl font-extrabold text-teal-600">
                Have questions? <br class="hidden md:block" />
                <span class="text-black">Let us know!</span>
            </h2>
            <p class="text-gray-500 text-lg">
                We're here to help!
            </p>
            <div class="flex items-center justify-center md:justify-start text-gray-500 text-lg space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span>+65 6779-2711</span>
            </div>
            <div class="flex items-center justify-center md:justify-start text-gray-500 text-lg space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                </svg>
                <span>+65 6779-2821</span>
            </div>
            <img
                src="/public/images/contact.jpg"
                alt="Contact Illustration"
                class="hidden md:block mx-auto md:mx-0 max-w-sm"
            />
            </div>  
            <!-- Right Side: Form -->
            <form class="space-y-4 md:min-h-screen flex flex-col justify-center"
                action="mailto:your-email@example.com"
                method="POST"
                enctype="text/plain">
                <input type="text" placeholder="Your name" class="form-input"/>
                <input type="email" placeholder="Email" class="form-input"/>
                <input type="text" placeholder="Subject" class="form-input"/>
                <textarea placeholder="Write your message" rows="5" class="form-input"></textarea>
                <button type="submit" class="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                    Send Message
                </button>
            </form>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.711117190313!2d103.7188958!3d1.3498477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0fdc94e77d6b%3A0x8185edc55b9829f6!2sStature%20Real%20Estate%20Enterprises%20Pte.%20Ltd.!5e0!3m2!1sen!2ssg!4v1752908616986!5m2!1sen!2ssg" width="100%" height="450" style="border:0" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
</template>

<script setup>

</script>