import { motion } from "framer-motion"

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center" 
      style={{
        position: "relative",
        width: "100%",
        padding: "20px 10%",
        display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)"     
      }}
      >
        
        {/* Logo / Nome */}
        <h1 className="text-lg font-bold tracking-wider">
          Luan<span className="text-purple-400">Dev</span>
        </h1>

        {/* Links */}
        <div className="flex gap-8 text-sm">
          <a href="#sobre" className="hover:text-purple-400 transition">
            Sobre
          </a>

          <a href="#tecnologias" className="hover:text-purple-400 transition">
            Tecnologias
          </a>

          <a href="#projetos" className="hover:text-purple-400 transition">
            Projetos
          </a>

          <a href="#contato" className="hover:text-purple-400 transition">
            Contato
          </a>
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar
