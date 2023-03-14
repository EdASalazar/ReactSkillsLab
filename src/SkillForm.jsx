export default function SkillForm() {
  return (
    <form action="POST" className="teal-text NewSkillForm">
      <label htmlFor="">Skill</label>
      <input type="text" />
      <label htmlFor="">Level</label>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>ADD SKILLS</button>
    </form>
  );
}
