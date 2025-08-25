import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  variant?: 'default' | 'white';
  showText?: boolean;
}

export default function Logo({ 
  width = 40, 
  height = 40, 
  className = "", 
  variant = 'default',
  showText = true 
}: LogoProps) {
  const textColor = variant === 'white' 
    ? 'text-white' 
    : 'text-secondary-900';
  
  const accentColor = variant === 'white' 
    ? 'text-primary-400' 
    : 'text-primary-500';

  return (
    <div className={`flex items-center logo-container ${className}`}>
      <div className="relative flex-shrink-0">
        {variant === 'default' ? (
          <div className="bg-secondary-900 p-1.5 rounded-md shadow-sm border border-secondary-800/50">
            <Image
              src="/images/apolocode-logo.png"
              alt="ApoloCode Logo"
              width={width}
              height={height}
              className="object-contain logo-glow"
              style={{
                filter: 'brightness(1.1) drop-shadow(0 0 6px rgba(249, 115, 22, 0.4))'
              }}
              priority
              quality={100}
            />
          </div>
        ) : (
          <Image
            src="/images/apolocode-logo.png"
            alt="ApoloCode Logo"
            width={width}
            height={height}
            className="object-contain logo-glow"
            style={{
              filter: variant === 'white' 
                ? 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.3)) brightness(1.1)' 
                : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}
            priority
            quality={100}
          />
        )}
      </div>
      {showText && (
        <div className={`ml-3 text-2xl font-bold ${textColor} select-none tracking-tight`}>
          Apolo<span className={accentColor}>Code</span>
        </div>
      )}
    </div>
  );
}
