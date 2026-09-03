function Navbar({setCurrentPage }) {
  return (
    <section className="navbar">
        <button onClick={() => setCurrentPage("environmental")}>Environmental Impacts</button>
        <button onClick={() => setCurrentPage("cultural")}>Cultural Impacts</button>
        <button onClick={() => setCurrentPage("solutions")}>Solutions</button>
    </section>
  );
}

export default Navbar;