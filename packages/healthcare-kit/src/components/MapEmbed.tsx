interface MapEmbedProps {
  address?: string;
  city: string;
  businessName: string;
  className?: string;
}

export function MapEmbed({ address, city, businessName, className = 'h-72' }: MapEmbedProps) {
  const query = encodeURIComponent(address ? `${businessName}, ${address}` : `${businessName}, ${city}`);
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <div className={`overflow-hidden ${className}`} style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)' }}>
      <iframe
        src={src}
        title={`Map showing ${businessName}`}
        className="h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
