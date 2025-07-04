
import { X } from "lucide-react";

const SizeGuide = ({ isOpen, onClose, category }) => {
  if (!isOpen) return null;

  const sizeGuides = {
    men: {
      clothing: [
        { size: "S", chest: "36-38", waist: "30-32", hip: "36-38" },
        { size: "M", chest: "38-40", waist: "32-34", hip: "38-40" },
        { size: "L", chest: "40-42", waist: "34-36", hip: "40-42" },
        { size: "XL", chest: "42-44", waist: "36-38", hip: "42-44" },
        { size: "XXL", chest: "44-46", waist: "38-40", hip: "44-46" }
      ],
      shoes: [
        { size: "40", uk: "6", us: "7", cm: "25.5" },
        { size: "41", uk: "7", us: "8", cm: "26.0" },
        { size: "42", uk: "8", us: "9", cm: "26.5" },
        { size: "43", uk: "9", us: "10", cm: "27.0" },
        { size: "44", uk: "10", us: "11", cm: "27.5" }
      ]
    },
    women: {
      clothing: [
        { size: "XS", bust: "32-34", waist: "24-26", hip: "34-36" },
        { size: "S", bust: "34-36", waist: "26-28", hip: "36-38" },
        { size: "M", bust: "36-38", waist: "28-30", hip: "38-40" },
        { size: "L", bust: "38-40", waist: "30-32", hip: "40-42" },
        { size: "XL", bust: "40-42", waist: "32-34", hip: "42-44" }
      ],
      shoes: [
        { size: "36", uk: "3", us: "5", cm: "23.0" },
        { size: "37", uk: "4", us: "6", cm: "23.5" },
        { size: "38", uk: "5", us: "7", cm: "24.0" },
        { size: "39", uk: "6", us: "8", cm: "24.5" },
        { size: "40", uk: "7", us: "9", cm: "25.0" }
      ]
    },
    children: {
      clothing: [
        { age: "2-3Y", height: "92-98", chest: "52-54", waist: "50-52" },
        { age: "4-5Y", height: "104-110", chest: "56-58", waist: "52-54" },
        { age: "6-7Y", height: "116-122", chest: "60-62", waist: "54-56" },
        { age: "8-9Y", height: "128-134", chest: "64-66", waist: "56-58" },
        { age: "10-11Y", height: "140-146", chest: "68-70", waist: "58-60" }
      ]
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Size Guide</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-4">Clothing Sizes</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Size</th>
                    {category === 'children' ? (
                      <>
                        <th className="border border-gray-300 px-4 py-2">Height (cm)</th>
                        <th className="border border-gray-300 px-4 py-2">Chest (cm)</th>
                        <th className="border border-gray-300 px-4 py-2">Waist (cm)</th>
                      </>
                    ) : (
                      <>
                        <th className="border border-gray-300 px-4 py-2">{category === 'women' ? 'Bust' : 'Chest'} (inches)</th>
                        <th className="border border-gray-300 px-4 py-2">Waist (inches)</th>
                        <th className="border border-gray-300 px-4 py-2">Hip (inches)</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {sizeGuides[category]?.clothing.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        {item.size || item.age}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {item.chest || item.bust || item.height}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">{item.waist}</td>
                      <td className="border border-gray-300 px-4 py-2">{item.hip || item.chest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {sizeGuides[category]?.shoes && (
            <div>
              <h4 className="text-lg font-semibold mb-4">Shoe Sizes</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">EU</th>
                      <th className="border border-gray-300 px-4 py-2">UK</th>
                      <th className="border border-gray-300 px-4 py-2">US</th>
                      <th className="border border-gray-300 px-4 py-2">CM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuides[category].shoes.map((item, index) => (
                      <tr key={index}>
                        <td className="border border-gray-300 px-4 py-2 font-semibold">{item.size}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.uk}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.us}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.cm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Measuring Tips:</h5>
            <ul className="text-sm space-y-1">
              <li>• Use a measuring tape for accurate measurements</li>
              <li>• Measure over undergarments for clothing</li>
              <li>• For shoes, measure your feet in the evening when they're slightly swollen</li>
              <li>• If between sizes, choose the larger size for comfort</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
