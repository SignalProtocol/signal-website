import { useEffect, useRef, useCallback } from "react";
import Mixpanel from "@/mixpanel";

interface SectionTrackingData {
  sectionName: string;
  enterTime: number | null;
  totalTimeSpent: number;
  visitCount: number;
}

/**
 * Custom hook to track section visibility and time spent using Intersection Observer
 * @param sectionName - The name of the section to track
 * @param threshold - How much of the section needs to be visible (0-1, default 0.5 = 50%)
 */
export const useSectionTracking = (
  sectionName: string,
  threshold: number = 0.5
) => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackingData = useRef<SectionTrackingData>({
    sectionName,
    enterTime: null,
    totalTimeSpent: 0,
    visitCount: 0,
  });

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // User entered the section
          trackingData.current.enterTime = Date.now();
          trackingData.current.visitCount += 1;

          Mixpanel.track(`${sectionName} Viewed`, {
            section_name: sectionName,
            visit_number: trackingData.current.visitCount,
            timestamp: new Date().toISOString(),
          });
        } else if (trackingData.current.enterTime !== null) {
          // User left the section - calculate time spent
          const timeSpent = Date.now() - trackingData.current.enterTime;
          trackingData.current.totalTimeSpent += timeSpent;

          Mixpanel.track(`${sectionName} Left`, {
            section_name: sectionName,
            time_spent_ms: timeSpent,
            time_spent_seconds: Math.round(timeSpent / 1000),
            total_time_spent_ms: trackingData.current.totalTimeSpent,
            total_time_spent_seconds: Math.round(
              trackingData.current.totalTimeSpent / 1000
            ),
            visit_number: trackingData.current.visitCount,
            timestamp: new Date().toISOString(),
          });

          trackingData.current.enterTime = null;
        }
      });
    },
    [sectionName]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: "0px",
      threshold: threshold,
    });

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup and track final time when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }

      // If user was viewing the section when unmounting, track the remaining time
      if (trackingData.current.enterTime !== null) {
        const timeSpent = Date.now() - trackingData.current.enterTime;
        trackingData.current.totalTimeSpent += timeSpent;

        Mixpanel.track("Section Session Ended", {
          section_name: sectionName,
          final_time_spent_ms: timeSpent,
          total_time_spent_ms: trackingData.current.totalTimeSpent,
          total_time_spent_seconds: Math.round(
            trackingData.current.totalTimeSpent / 1000
          ),
          total_visits: trackingData.current.visitCount,
          timestamp: new Date().toISOString(),
        });
      }
    };
  }, [handleIntersection, threshold, sectionName]);

  return sectionRef;
};

interface TrackableSectionProps {
  children: React.ReactNode;
  sectionName: string;
  threshold?: number;
  className?: string;
}

/**
 * Wrapper component for tracking sections
 * Use this to wrap existing section components without modifying them
 */
export const TrackableSection: React.FC<TrackableSectionProps> = ({
  children,
  sectionName,
  threshold = 0.5,
  className = "",
}) => {
  const sectionRef = useSectionTracking(sectionName, threshold);

  return (
    <section ref={sectionRef} className={className} data-section={sectionName}>
      {children}
    </section>
  );
};

export default useSectionTracking;
