import { FeedWrapper } from "@/components/shared/FeedWrapper";
import { StickyWrapper } from "@/components/shared/StickyWrapper";
import { Header } from "./components/Header";
import { UserProgress } from "@/components/shared/UserProgress";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
          hearts={5}
          points={100}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish" />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
