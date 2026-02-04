import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Your icons
import "./CategoryBox.css";
import DishCard from "./ItemCard";

const DishBox = ({ categoryTitle, cards }) => {
    // 1. Responsive State: Decide cards per view based on screen width
    const [slidesPerView, setSlidesPerView] = useState(4); 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);


    // Update slidesPerView on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setSlidesPerView(1); // Mobile
            else if (window.innerWidth < 1024) setSlidesPerView(2); // Tablet
            else if (window.innerWidth < 1200) setSlidesPerView(3);
            else setSlidesPerView(4); // Desktop
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxSteps = cards.length - slidesPerView;

        useEffect(() => {
        if (isPaused || maxSteps <= 0) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev >= maxSteps ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, [maxSteps, isPaused]);

    // Navigation functions
    const nextSlide = () => setCurrentIndex((prev) => (prev >= maxSteps ? 0 : prev + 1));
    const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxSteps : prev - 1));

    return (
        <div className="slider-container" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <h2 className="category-title">{categoryTitle}</h2>
            
            <div className="slider-wrapper">
                {/* Arrow Buttons */}
                <button className="nav-arrow left" onClick={prevSlide}><ChevronLeft /></button>
                <button className="nav-arrow right" onClick={nextSlide}><ChevronRight /></button>

                <div className="slider-window">
                    <div 
                        className="slider-track"
                        style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div 
                                className="slider-item-wrapper" 
                                key={index}
                                style={{ minWidth: `${100 / slidesPerView}%` }}
                            >
                                <DishCard name={card.name} image={card.image} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="dots-container">
                {Array.from({ length: maxSteps + 1 }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`dot ${currentIndex === i ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        </div>
    );
};


export default DishBox