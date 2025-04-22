const moods = ['Chill', 'Adventurous', 'Romantic'];

export default function MoodSelector({ onSelect }) {
  return (
    <div>
      <h2>What mood are you in?</h2>
      {moods.map((mood) => (
        <button key={mood} onClick={() => onSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
}