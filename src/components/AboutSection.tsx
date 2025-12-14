"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export function AboutSection() {
    const features = [
        {
            icon: Code,
            title: "Clean Code",
            description:
                "가독성과 확장성을 고려한 깔끔한 코드를 작성하는 것을 중요하게 생각합니다.",
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description:
                "문제의 표면이 아닌 원인을 파악하고, 명확한 구조와 설계를 통해 해결합니다.",
        },
        {
            icon: Users,
            title: "Collaboration",
            description:
                "적극적인 소통으로 팀과 함께 더 나은 결과를 만들어갑니다.",
        },
        {
            icon: Coffee,
            title: "Dedication",
            description:
                "새로운 기술을 배우고 실제 프로젝트에 적용하며 꾸준히 성장합니다.",
        },
    ];

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl text-white mb-4">
                            의미 있는 디지털 경험을 만드는 것을 목표로,
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            웹 서비스의 구조와 동작 원리를 깊이 이해하는
                            개발자로 성장하고 있습니다. Spring Boot 기반의
                            백엔드 설계와 React를 활용한 UI 구현까지 직접
                            개발하며 서비스를 경험해 왔습니다. 문제의 원인을
                            구조적으로 분석하고 개선하는 과정을 중요하게
                            생각하며, 명확한 설계와 유지보수 가능한 코드로
                            아이디어를 실제 동작하는 서비스로 구현하는 데
                            집중합니다.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            주로 Spring Boot, React를 기반으로 웹 애플리케이션을
                            개발하며, AWS 환경에서 서버, 데이터베이스, 스토리지
                            연동을 경험했습니다. 필요에 따라 새로운 기술을
                            빠르게 학습하고 적용합니다. 팀 프로젝트에서는 역할에
                            국한되지 않고 문제 해결을 위해 적극적으로 소통하는
                            개발자가 되고자 합니다.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3 mt-6"
                        >
                            {[
                                "해결사모드",
                                "러닝메이트",
                                "빠르게 배우는",
                                "디테일집착광공",
                            ].map((trait, index) => (
                                <span
                                    key={trait}
                                    className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                                >
                                    {trait}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                                    <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-white text-lg mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {feature.description}
                                    </p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
