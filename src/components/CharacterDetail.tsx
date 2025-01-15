export const CharacterDetail = ({ label, value }) => {
    return (
        <p><span className="font-semibold">{label}:</span> {value || "-"}</p>
    );
};
