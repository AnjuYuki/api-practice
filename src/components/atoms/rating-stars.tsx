import { Star } from 'lucide-react';

type Props = {
  value: number;
  max?: number;
  size?: number;
};

export function StarRating({ value, max = 5, size = 16 }: Props) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.min(1, Math.max(0, value - i));
        return (
          <div
            key={i}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* ベース */}
            <Star size={size} className="fill-none stroke-gray-300" />
            {/* 塗り */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star size={size} className="fill-amber-400 stroke-amber-400" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
