

/* -------------------------------------------------------------------------- */
/*  CheckoutCard — komponen utama                                            */
/* -------------------------------------------------------------------------- */
function CheckoutCard() {
  return (
    <aside
      className={`w-full lg:w-[366px] flex flex-col items-start p-5 gap-4 bg-white border border-[rgba(58,53,65,0.12)] rounded-[10px] lg:sticky lg:top-24 shrink-0 `}
    >
      {/* Header Filter + Reset */}
      <div className="flex flex-row justify-between items-center gap-4 w-full">
        <h3
          className="text-[18px] leading-[120%] text-[rgba(51,51,51,0.68)] flex items-center gap-2"
          style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
        >
          Filter
        </h3>
      </div>
    </aside>
  );
}

export default CheckoutCard;
