export default function Logo({ className = '' }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="139" height="40" viewBox="0 0 139 40" fill="none">
      <text x="0" y="28" fill="#fff" fontFamily="Roboto Flex, Arial, sans-serif" fontWeight="800" fontSize="22">Moniqo</text>
      <text x="88" y="28" fill="url(#logoGrad)" fontFamily="Roboto Flex, Arial, sans-serif" fontWeight="800" fontSize="22">Pay</text>
      <defs>
        <linearGradient id="logoGrad" x1="88" y1="0" x2="139" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2792F4" />
          <stop offset="1" stopColor="#7170E5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
