import { Star, ExternalLink, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { allReviews, googleReviewsUrl, type Review } from "@/lib/testimonials-data";

// Direct link to write a Google review
const writeReviewUrl = "https://g.page/r/CZhYbbZMOPPqEAE/review";

function ReviewCard({ review }: { review: Review }) {
    return (
        <Card className="p-3 flex flex-col gap-2 hover:shadow-lg transition-shadow h-full">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-foreground text-sm truncate">{review.name}</span>
            </div>
            <div className="flex gap-0.5">
                {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            {review.text && (
                <p className="text-xs text-foreground/90 leading-relaxed line-clamp-4">{review.text}</p>
            )}
            {review.ownerResponse && (
                <div className="bg-muted/50 rounded px-2 py-1 mt-auto">
                    <p className="text-[10px] text-muted-foreground">
                        <span className="font-medium">Response:</span> {review.ownerResponse}
                    </p>
                </div>
            )}
        </Card>
    );
}

export default function Testimonials() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section - Compact */}
            <section className="bg-card border-b border-card-border py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    {/* Google Badge */}
                    <div className="inline-flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-100 mb-4">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-xs font-medium text-gray-700">Reviews straight from Google</span>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        What Our Clients Say
                    </h1>

                    <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
                        207 verified reviews from real customers on the Eastside
                    </p>

                    {/* Stats Row - Compact */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-1">
                                <span className="text-xl font-bold text-foreground">5.0</span>
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            </div>
                            <p className="text-[10px] text-muted-foreground">Average Rating</p>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                            <p className="text-xl font-bold text-foreground">206</p>
                            <p className="text-[10px] text-muted-foreground">5-Star Reviews</p>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                            <p className="text-xl font-bold text-foreground">25</p>
                            <p className="text-[10px] text-muted-foreground">Years Experience</p>
                        </div>
                    </div>

                    {/* Buttons Row */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                        <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="default" variant="default" className="bg-accent text-accent-foreground border border-accent-border gap-2">
                                <ExternalLink className="w-4 h-4" />
                                View on Google
                            </Button>
                        </a>
                        <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="default" variant="outline" className="gap-2">
                                <PenLine className="w-4 h-4" />
                                Write a Review
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Reviews Grid - 5 columns, tight spacing */}
            <section className="py-6">
                <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {allReviews.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA - Compact */}
            <section className="bg-card border-t border-card-border py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-xl font-bold text-foreground mb-2">Ready to experience the difference?</h2>
                    <p className="text-sm text-muted-foreground mb-4">Join our growing list of satisfied customers</p>
                    <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="default" variant="outline" className="gap-2">
                            <Star className="w-4 h-4" />
                            Leave a Review
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}

