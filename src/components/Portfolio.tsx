
import React from 'react';
import { Wallet, BarChart3, Shield, Cpu, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "DeFiSwap Protocol",
    subtitle: "Automated Market Maker",
    description: "Built a next-generation DEX with advanced AMM algorithms, enabling efficient token swaps with minimal slippage and maximum liquidity.",
    tags: ["Solidity", "React", "Web3.js", "Uniswap V3"],
    category: "DeFi",
    icon: <BarChart3 className="w-6 h-6" />,
    tvl: "$2.5M",
    status: "Live"
  },
  {
    id: 2,
    title: "MultiChain Wallet",
    subtitle: "Cross-Chain Asset Management", 
    description: "Developed a secure multi-chain wallet supporting 15+ networks with seamless bridge integration and advanced security features.",
    tags: ["TypeScript", "Ethers.js", "Polygon", "BSC"],
    category: "Wallet Infrastructure",
    icon: <Wallet className="w-6 h-6" />,
    tvl: "$5.2M",
    status: "Live"
  },
  {
    id: 3,
    title: "Yield Farming Hub",
    subtitle: "Automated Yield Optimization",
    description: "Created an intelligent yield farming platform that automatically allocates funds to highest-yielding opportunities across DeFi.",
    tags: ["Solidity", "Compound", "Aave", "Yearn"],
    category: "Yield Farming", 
    icon: <Cpu className="w-6 h-6" />,
    tvl: "$8.7M",
    status: "Beta"
  },
  {
    id: 4,
    title: "NFT Marketplace",
    subtitle: "Decentralized Trading Platform",
    description: "Built a gas-efficient NFT marketplace with advanced features like fractional ownership, lending, and cross-chain trading.",
    tags: ["React", "IPFS", "OpenSea API", "Polygon"],
    category: "NFT",
    icon: <Shield className="w-6 h-6" />,
    tvl: "$1.8M",
    status: "Live"
  },
  {
    id: 5,
    title: "Governance DAO",
    subtitle: "Decentralized Governance",
    description: "Developed a comprehensive DAO governance system with token-weighted voting, proposal management, and treasury controls.",
    tags: ["Solidity", "Snapshot", "Aragon", "Gnosis Safe"],
    category: "Governance",
    icon: <BarChart3 className="w-6 h-6" />,
    tvl: "$12.3M",
    status: "Live"
  },
  {
    id: 6,
    title: "Flash Loan Arbitrage",
    subtitle: "MEV Extraction Bot",
    description: "Created sophisticated arbitrage bot leveraging flash loans to extract value from price differences across DEXes.",
    tags: ["Python", "Web3.py", "Flashloans", "1inch"],
    category: "Arbitrage",
    icon: <Cpu className="w-6 h-6" />,
    tvl: "$3.1M",
    status: "Active"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 backdrop-blur-sm bg-blue-500/10 border border-blue-400/30 rounded-xl mb-6">
            <Wallet className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DeFi & Web3 Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A showcase of decentralized applications, smart contracts, and blockchain solutions I've built.
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-2xl h-80 transform hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm bg-slate-800/30 border border-slate-700/50 hover:border-blue-400/30"
            >
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                {/* Top section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                        {project.icon}
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 border-green-400/50 text-green-400'
                        : project.status === 'Beta'
                        ? 'bg-blue-500/20 border-blue-400/50 text-blue-400'
                        : 'bg-yellow-500/20 border-yellow-400/50 text-yellow-400'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  <h3 className="text-white text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom section */}
                <div className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-2 py-1 rounded-lg text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TVL and actions */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      {project.tvl}
                    </div>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-slate-700/50 border border-slate-600/50 rounded-lg flex items-center justify-center hover:bg-slate-600/50 transition-colors">
                        <Github className="w-4 h-4 text-slate-300" />
                      </button>
                      <button className="w-10 h-10 bg-slate-700/50 border border-slate-600/50 rounded-lg flex items-center justify-center hover:bg-slate-600/50 transition-colors">
                        <ExternalLink className="w-4 h-4 text-slate-300" />
                      </button>
                    </div>
                  </div>

                  {/* View Details button */}
                  <button className="w-full bg-blue-500/10 border border-blue-400/30 text-blue-400 py-3 rounded-lg font-semibold text-sm hover:bg-blue-500/20 transition-all duration-200">
                    View Protocol
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
