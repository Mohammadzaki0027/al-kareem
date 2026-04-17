

export default function PromoSnackbar() {



  return (
  
      <div className="flex items-center gap-4 bg-gray/80 backdrop-blur-lg text-white px-6 py-4 rounded-xl shadow-lg border border-white/10 max-w-lg w-full">
        
        {/* Text */}
        <p className="text-sm leading-tight flex-1">
           Need a website for your business? Contact us today!
        </p>

        {/* Phone */}
        <span className="text-xs font-semibold text-primary whitespace-nowrap">
          +91 7058786461
        </span>

        {/* Button */}
        <a
          href="https://wa.me/917058786461"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap bg-gradient-to-r from-primary to-secondary px-4 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transition"
        >
          WhatsApp
        </a>

      </div>

  );
}