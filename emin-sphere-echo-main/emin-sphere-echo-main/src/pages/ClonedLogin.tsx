
  import React, { useEffect, useRef } from 'react';

  const ClonedLogin = () => {
    const containerRef = useRef(null);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div 
        className="cloned-website-container"
        ref={containerRef}
        dangerouslySetInnerHTML={{ __html: "\n   <div class=\"container login-page\">\n      <div class=\"form-container\" id=\"formContainer\">\n         <h2 class=\"text-center\">Login or Signup</h2>\n         <button class=\"google-button\">\n            <a class=\"d-flex google-btn\" href=\"/auth/google\" style=\"gap: 8px; align-items: center;\">\n               <img src=\"/image/email/google.png\" width=\"18px\" height=\"18px\"> Continue with Google\n            </a>\n         </button>\n         <div class=\"line-container\">\n            <span class=\"hline\"></span>\n            <p class=\"text-center form-text my-3\">Or continue with your email</p>\n            <span class=\"hline\"></span>\n         </div>\n         <form action=\"/verify-email\" method=\"POST\" id=\"otpForm\">\n            <input type=\"hidden\" name=\"_token\" value=\"fzXcP8rFnFov62toV5bXJ8qyyZW4rEtDXAJgz2ST\" autocomplete=\"off\"> \n            <div class=\"mb-3\">\n               <input type=\"email\" name=\"email\" id=\"emailField\" class=\"form-control\" placeholder=\"Enter your mail id\" required>\n            </div>\n            <button type=\"submit\" id=\"continue\" class=\"btn btn-primary mt-2\">Continue</button>\n         </form>\n      </div>\n   </div>\n<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML=\"window.__CF$cv$params={r:'9f1b00fd2e32f8f8',t:'MTc3NzA5NTUzMQ=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);\";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script><script defer src=\"https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516\" integrity=\"sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==\" data-cf-beacon='{\"version\":\"2024.11.0\",\"token\":\"8d67d24e61774039879fd30efa37e3b8\",\"r\":1,\"server_timing\":{\"name\":{\"cfCacheStatus\":true,\"cfEdge\":true,\"cfExtPri\":true,\"cfL4\":true,\"cfOrigin\":true,\"cfSpeedBrain\":true},\"location_startswith\":null}}' crossorigin=\"anonymous\"></script>\n" }} 
      />
    );
  };

  export default ClonedLogin;
  