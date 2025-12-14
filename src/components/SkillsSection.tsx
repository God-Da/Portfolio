"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";

export function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                {
                    name: "React",
                    level: 77,
                    color: "from-blue-400 to-blue-600",
                },
                {
                    name: "JavaScript (ES6+)",
                    level: 78,
                    color: "from-yellow-400 to-yellow-600",
                },
                {
                    name: "Tailwind CSS",
                    level: 82,
                    color: "from-cyan-400 to-cyan-600",
                },
            ],
        },
        {
            title: "Backend",
            skills: [
                {
                    name: "Spring Boot",
                    level: 79,
                    color: "from-green-500 to-green-700",
                },
                { name: "Java", level: 80, color: "from-red-400 to-red-600" },
                {
                    name: "Node.js",
                    level: 71,
                    color: "from-green-400 to-green-600",
                },
                {
                    name: "Python",
                    level: 81,
                    color: "from-yellow-400 to-yellow-600",
                },
            ],
        },
        {
            title: "Database",
            skills: [
                {
                    name: "MySQL",
                    level: 82,
                    color: "from-indigo-400 to-indigo-600",
                },
                {
                    name: "MariaDB",
                    level: 85,
                    color: "from-sky-400 to-sky-600",
                },
                {
                    name: "Oracle DB",
                    level: 81,
                    color: "from-orange-400 to-orange-600",
                },
            ],
        },
        {
            title: "Infra & Tools",
            skills: [
                {
                    name: "AWS (EC2, RDS, S3)",
                    level: 72,
                    color: "from-orange-400 to-orange-600",
                },
                {
                    name: "Git / GitHub",
                    level: 85,
                    color: "from-gray-400 to-gray-600",
                },
                // {
                //     name: "Docker",
                //     level: 60,
                //     color: "from-blue-600 to-blue-800",
                // },
            ],
        },
    ];

    const certifications = [
        "정보처리산업기사",
        "SQL 개발자 (SQLD)",
        "컴퓨터활용능력 2급",
    ];

    return (
        <section id="skills" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">
                        Skills & Technologies
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        프로젝트 경험을 바탕으로, 이론적 이해를 함께 쌓아온
                        기술들입니다.
                    </p>
                </motion.div>

                {/* Skills */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: categoryIndex * 0.2,
                                duration: 0.8,
                            }}
                            viewport={{ once: true }}
                        >
                            <Card className="p-6 bg-gray-900/50 border-white/10 backdrop-blur-sm">
                                <h3 className="text-xl text-white mb-6 text-center">
                                    {category.title}
                                </h3>
                                <div className="space-y-4">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="space-y-2"
                                        >
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-300 text-sm">
                                                    {skill.name}
                                                </span>
                                                <span className="text-gray-400 text-xs">
                                                    {skill.level}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{
                                                        width: `${skill.level}%`,
                                                    }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: "easeOut",
                                                    }}
                                                    viewport={{ once: true }}
                                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl text-white mb-8">Certifications</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                        {certifications.map((cert, index) => (
                            <motion.span
                                key={cert}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.8 + index * 0.1,
                                    duration: 0.3,
                                }}
                                viewport={{ once: true }}
                                className="px-6 py-3 bg-white/5 text-gray-300 rounded-lg border border-white/10 text-sm hover:bg-white/10 transition-all duration-300"
                            >
                                {cert}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
