import { Star } from "lucide-react";
import { Link } from "wouter";
import { featuredReviews } from "@/lib/testimonials-data";

export default function HeroReviewsMarquee() {
    // Duplicate reviews for seamless infinite scroll
    const reviews = [...featuredReviews, ...featuredReviews];

    return (
        <Link href="/testimonials" className="block w-full">
            <div className="bg-white/95 backdrop-blur-sm overflow-hidden py-6 md:py-7 rounded-lg shadow-lg cursor-pointer hover:bg-white transition-colors">
                <div className="flex animate-marquee hover:pause-animation">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4 flex items-center gap-3 md:gap-4 bg-gray-100 rounded-lg px-4 md:px-5 py-3 md:py-4 min-w-[300px] md:min-w-[350px] max-w-[400px] md:max-w-[450px]"
                        >
                            <div className="flex-shrink-0">
                                <div className="flex gap-0.5">
                                    {[...Array(review.stars)].map((_, i) => (
                                        <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-800 text-sm md:text-base truncate font-medium">{review.name}</p>
                                {review.text && (
                                    <p className="text-gray-600 text-xs md:text-sm truncate">{review.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}

