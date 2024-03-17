import { lessons, units } from "@/db/schema";
import React from "react";
import { UnitBanner } from "./UnitBanner";
import { LessonButton } from "./LessonButton";

type UnitProps = {
  id: number;
  order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonsPercentage: number;
};

export const Unit = ({
  activeLesson,
  activeLessonsPercentage,
  description,
  id,
  lessons,
  order,
  title,
}: UnitProps) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonsPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
