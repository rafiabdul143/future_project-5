import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Trophy, Flame, Loader, Users, MessageSquare, Award, AtSign } from 'lucide-react';

interface GitHubStats {
  totalRepos: number;
  currentStreak: number;
  longestStreak: number;
  totalCommits: number;
}

interface TwitterStats {
  followers: number;
  following: number;
  tweets: number;
  listed: number;
}

const Stats = () => {
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [twitterStats, setTwitterStats] = useState<TwitterStats | null>(null);
  const [loading, setLoading] = useState(true);

  const GITHUB_USERNAME = 'rafiabdul143';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const TWITTER_USERNAME = 'your_twitter_handle';
  const TWITTER_BEARER = import.meta.env.VITE_TWITTER_BEARER_TOKEN;

  // 🔹 Fetch GitHub Stats
  const fetchGitHubStats = async () => {
    try {
      const query = `
        query {
          user(login: "${GITHUB_USERNAME}") {
            repositories {
              totalCount
            }
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
              totalCommitContributions
            }
          }
        }
      `;

      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
      const days = weeks.flatMap((week: any) => week.contributionDays);

      days.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());

      let longestStreak = 0, tempStreak = 0, currentStreak = 0;
      for (let i = 0; i < days.length; i++) {
        if (days[i].contributionCount > 0) {
          tempStreak++;
          longestStreak = Math.max(longestStreak, tempStreak);
        } else tempStreak = 0;
      }
      for (let i = days.length - 1; i >= 0; i--) {
        if (days[i].contributionCount > 0) currentStreak++;
        else break;
      }

      setGithubStats({
        totalRepos: data.data.user.repositories.totalCount,
        currentStreak,
        longestStreak,
        totalCommits: data.data.user.contributionsCollection.totalCommitContributions,
      });
    } catch (err) {
      console.error('Error fetching GitHub stats:', err);
      setGithubStats({ totalRepos: 0, currentStreak: 0, longestStreak: 0, totalCommits: 0 });
    }
  };

  // 🔹 Fetch Twitter Stats
  const fetchTwitterStats = async () => {
    try {
      const res = await fetch(`https://api.twitter.com/2/users/by/username/${TWITTER_USERNAME}?user.fields=public_metrics`, {
        headers: { Authorization: `Bearer ${TWITTER_BEARER}` },
      });

      const data = await res.json();
      const metrics = data.data.public_metrics;

      setTwitterStats({
        followers: metrics.followers_count,
        following: metrics.following_count,
        tweets: metrics.tweet_count,
        listed: metrics.listed_count,
      });
    } catch (err) {
      console.error('Error fetching Twitter stats:', err);
      setTwitterStats({ followers: 0, following: 0, tweets: 0, listed: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubStats();
    fetchTwitterStats();
  }, []);

  const AnimatedCounter = ({ value }: { value: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!value) return;
      const increment = value / 120;
      const timer = setInterval(() => {
        setCount(prev => {
          const next = prev + increment;
          if (next >= value) { clearInterval(timer); return value; }
          return next;
        });
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [value]);
    return <motion.span className="text-4xl md:text-5xl font-bold">{Math.floor(count).toLocaleString()}</motion.span>;
  };

  const StatCard = ({ stat, index, platform }: { stat: any; index: number; platform: string }) => (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="group relative">
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105">
        <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 text-white`}>
          {stat.icon}
        </div>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <AnimatedCounter value={stat.value} />
            <span className="text-lg text-gray-400">{stat.unit}</span>
          </div>
          <h4 className="text-xl font-semibold text-white">{stat.label}</h4>
          <p className="text-sm text-gray-500 uppercase">{platform}</p>
        </div>
      </div>
    </motion.div>
  );

  if (loading || !githubStats || !twitterStats)
    return (
      <section className="py-20 bg-black text-center text-white">
        <Loader className="w-6 h-6 animate-spin mx-auto mb-4" />
        <p>Loading stats...</p>
      </section>
    );

  const githubStatsData = [
    { icon: <Flame />, label: 'Current Streak', value: githubStats.currentStreak, unit: 'days', color: 'from-orange-500 to-red-500' },
    { icon: <Trophy />, label: 'Longest Streak', value: githubStats.longestStreak, unit: 'days', color: 'from-yellow-500 to-orange-500' },
    { icon: <Github />, label: 'Repositories', value: githubStats.totalRepos, unit: 'repos', color: 'from-green-500 to-emerald-500' },
    { icon: <Github />, label: 'Commits', value: githubStats.totalCommits, unit: 'commits', color: 'from-blue-500 to-cyan-500' },
  ];

  const twitterStatsData = [
    { icon: <Users />, label: 'Followers', value: twitterStats.followers, unit: '', color: 'from-blue-500 to-cyan-500' },
    { icon: <Users />, label: 'Following', value: twitterStats.following, unit: '', color: 'from-green-500 to-emerald-500' },
    { icon: <MessageSquare />, label: 'Tweets', value: twitterStats.tweets, unit: '', color: 'from-orange-500 to-red-500' },
    { icon: <Award />, label: 'Listed In', value: twitterStats.listed, unit: '', color: 'from-yellow-500 to-orange-500' },
  ];

  return (
    
    <>
    
      {/* GitHub Stats */}
      
      <section className="min-h-screen bg-black relative overflow-hidden from-black-900/20 via-black/280 to-red-100/5 flex items-center justify-center">
      {/* Background & Decorations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900/20 via-black/280 to-red-100/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        {/* Floating tech elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-float-3d shadow-glow-red"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-red-500 rounded-full animate-float-3d shadow-glow-red" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-400 rounded-full animate-float-3d-delayed shadow-glow-red" style={{animationDelay: '0.5s'}}></div>
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 border-2 border-red-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-red-400/40 animate-pulse-3d"></div>
        <div className="absolute top-1/2 left-10 w-10 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-slide-horizontal"></div>
        <div className="absolute top-1/3 right-10 w-1 h-10 bg-gradient-to-b from-transparent via-red-500 to-transparent animate-slide-vertical"></div>
        {/* Circuit & hologram */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 animate-grid-move"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-red-500/10 rounded-full animate-hologram"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-500/15 rounded-full animate-hologram-reverse"></div>
      </div>

   
        <div className="container mx-auto px-6 mt-3 text-white">
         <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">GITHUB <span className="text-white-500"></span></h2>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-green-400 mb-6 inline-block">
            {GITHUB_USERNAME}
          </a>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {githubStatsData.map((stat, i) => <StatCard key={i} stat={stat} index={i} platform="GitHub" />)}
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Stats;
