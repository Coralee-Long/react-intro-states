

export const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white shadow-lg rounded-lg overflow-hidden w-64 h-100 flex flex-col ${className}`}>
            {children}
        </div>
    );
};
