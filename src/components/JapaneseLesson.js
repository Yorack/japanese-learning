import { useEffect, useState } from "react";
import { toHiragana, toKatakana } from "wanakana";
import { DocumentDuplicateIcon } from "@heroicons/react/outline";
import Button from "./button/CopyButton";
import CopyButton from "./button/CopyButton";

import { lessons } from "./JapaneseLessons";
import ArticleItem from "../entity/ArticleItem";
import { Disclosure } from "@headlessui/react";

const JapaneseLesson = () => {
  return (
    <div className="flex-1 box-content m-4">
      {lessons.map((lesson) => {
        return (
          <div className="box-content p-4 rounded-md m-4 bg-white shadow-lg text-left">
            <Disclosure>
              <Disclosure.Button className="py-2">
                <h1>{lesson.title}</h1>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500">
                {lesson.articles.map((article) => {
                  return (
                    <div className="mt-8">
                      <h3>{article.title}</h3>
                      <table className="w-full">
                        <thead>
                          <tr>
                            <th className="w-2/6">Symbol</th>
                            <th className="w-2/6">pronunciation</th>
                            <th className="w-2/6">meaning</th>
                          </tr>
                        </thead>
                        <tbody>
                          {article.items.map((item: ArticleItem) => {
                            return (
                              <tr>
                                <td className="text-2xl">{item.kanji}</td>
                                <td className="text-2xl">
                                  {item.pronunciation}
                                </td>
                                <td className="text-2xl">{item.meaning}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </Disclosure.Panel>
            </Disclosure>
          </div>
        );
      })}
    </div>
  );
};

export default JapaneseLesson;
