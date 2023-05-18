import { useEffect, useRef, useState } from "react"

const ScrollIntoView = (options: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [ isVisible, setIsVisible ] = useState<boolean | any>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                else{
                    setIsVisible(false);
                  }
            });
        }, options);
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
    }, [containerRef, options]);

    return [containerRef, isVisible];
}

export default ScrollIntoView;