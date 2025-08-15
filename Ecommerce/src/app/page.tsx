import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands";
import Header from "@/components/homepage/Header";
import Reviews from "@/components/homepage/Reviews";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "Solar System Explorer Kit",
    srcUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1631819339651-5ac4b99d8a0a?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1564053489984-317bbd824340?w=400&h=400&fit=crop"],
    price: 89,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.8,
    ageRange: "8-12",
    stemCategory: "Science",
    educationalLevel: "Intermediate",
    learningObjectives: ["Space exploration", "Planetary motion", "Solar energy"],
    keySkills: ["Scientific observation", "Data analysis", "Problem solving"],
    reviewCount: 127,
    educationalValue: "Hands-on astronomy learning"
  },
  {
    id: 2,
    title: "Coding Robot Building Set",
    srcUrl: "https://images.unsplash.com/photo-1561144257-e32e392ef205?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1561144257-e32e392ef205?w=400&h=400&fit=crop"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.6,
    ageRange: "10-14",
    stemCategory: "Technology",
    educationalLevel: "Beginner",
    learningObjectives: ["Programming basics", "Robotics", "Logic thinking"],
    keySkills: ["Coding", "Engineering design", "Sequential thinking"],
    reviewCount: 89,
    educationalValue: "Introduction to programming"
  },
  {
    id: 3,
    title: "Chemistry Lab Experiment Kit",
    srcUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=400&fit=crop"],
    price: 67,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.7,
    ageRange: "9-13",
    stemCategory: "Science",
    educationalLevel: "Intermediate",
    learningObjectives: ["Chemical reactions", "Lab safety", "Scientific method"],
    keySkills: ["Observation", "Hypothesis testing", "Critical thinking"],
    reviewCount: 156,
    educationalValue: "Safe chemistry exploration"
  },
  
  {
    id: 4,
    title: "Magnetic Puzzle Set",
    srcUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"],
    price: 35,
    discount: {
      amount: 0,
      percentage: 20
    },
    rating: 4.7,
    ageRange: "3-8",
    stemCategory: "Math",
    educationalLevel: "Beginner",
    learningObjectives: ["Problem-solving", "Pattern recognition", "Spatial reasoning"],
    keySkills: ["Fine motor skills", "Logical thinking", "Concentration"],
    reviewCount: 320,
    educationalValue: "Enhances cognitive skills through engaging puzzle play"
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Electronic Circuit Building Board",
    srcUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1537884557178-342a575d7d8e?w=400&h=400&fit=crop"],
    price: 78,
    discount: {
      amount: 0,
      percentage: 10,
    },
    rating: 4.9,
    ageRange: "8-14",
    stemCategory: "Engineering",
    educationalLevel: "Intermediate",
    learningObjectives: ["Electrical circuits", "Electronics basics", "Engineering design"],
    keySkills: ["Circuit building", "Problem solving", "Logical thinking"],
    reviewCount: 312,
    educationalValue: "Hands-on electronics learning"
  },

  {
    id: 7,
    title: "Math Fraction Learning Blocks",
    srcUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop"],
    price: 29,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.4,
    ageRange: "5-9",
    stemCategory: "Math",
    educationalLevel: "Beginner",
    learningObjectives: ["Fractions", "Number sense", "Mathematical reasoning"],
    keySkills: ["Mathematical thinking", "Visual learning", "Comparison"],
    reviewCount: 278,
    educationalValue: "Visual fraction understanding"
  },
  {
    id: 8,
    title: "Weather Station Science Kit",
    srcUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=400&fit=crop"],
    price: 52,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
    ageRange: "8-13",
    stemCategory: "Science",
    educationalLevel: "Intermediate",
    learningObjectives: ["Meteorology", "Data collection", "Weather patterns"],
    keySkills: ["Data analysis", "Observation", "Scientific recording"],
    reviewCount: 145,
    educationalValue: "Understanding weather science"
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Engineering Bridge Building Challenge",
    srcUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1569144157433-62e4d6d7a0e5?w=400&h=400&fit=crop"],
    price: 41,
    discount: {
      amount: 0,
      percentage: 15,
    },
    rating: 4.7,
    ageRange: "9-14",
    stemCategory: "Engineering",
    educationalLevel: "Intermediate",
    learningObjectives: ["Structural engineering", "Load testing", "Design thinking"],
    keySkills: ["Engineering design", "Problem solving", "Critical thinking"],
    reviewCount: 167,
    educationalValue: "Hands-on engineering principles"
  },
  {
    id: 13,
    title: "DNA Model Building Kit",
    srcUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?w=400&h=400&fit=crop", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"],
    price: 55,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    ageRange: "10-16",
    stemCategory: "Science",
    educationalLevel: "Advanced",
    learningObjectives: ["Genetics", "Molecular biology", "DNA structure"],
    keySkills: ["Scientific modeling", "Pattern recognition", "Analytical thinking"],
    reviewCount: 134,
    educationalValue: "Understanding genetic science"
  },
  {
    id: 14,
    title: "Solar Energy Car Kit",
    srcUrl: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=400&h=400&fit=crop"],
    price: 38,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.6,
    ageRange: "8-14",
    stemCategory: "Technology",
    educationalLevel: "Intermediate",
    learningObjectives: ["Renewable energy", "Engineering design", "Environmental science"],
    keySkills: ["Problem solving", "Environmental awareness", "Engineering principles"],
    reviewCount: 198,
    educationalValue: "Clean energy exploration"
  },
  {
    id: 15,
    title: "Magnetic Building Tiles Set",
    srcUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"],
    price: 45,
    discount: {
      amount: 0,
      percentage: 25,
    },
    rating: 4.8,
    ageRange: "3-8",
    stemCategory: "Math",
    educationalLevel: "Beginner",
    learningObjectives: ["Spatial reasoning", "Geometry", "Creative building"],
    keySkills: ["Fine motor skills", "Spatial awareness", "Creative thinking"],
    reviewCount: 445,
    educationalValue: "Early STEM foundation building"
  },
 
];

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Sarah M.",
    content:
      "This STEM store is amazing! My daughter loves the chemistry kit we got here. It's educational and keeps her engaged for hours. The quality is outstanding and the learning materials are comprehensive.",
    rating: 5,
    date: "March 15, 2025",
  },
  {
    id: 2,
    user: "Ahmed R.",
    content: "The robotics kit exceeded my expectations. My 12-year-old son learned programming basics while having a blast building and coding his robot. Great investment in his education!",
    rating: 5,
    date: "March 12, 2025",
  },
  {
    id: 3,
    user: "Sourour H",
    content: "As a teacher, I appreciate products that make learning fun. The microscope set is perfect for my classroom - sturdy, educational, and the kids are fascinated by what they discover.",
    rating: 5,
    date: "March 10, 2025",
  },
  {
    id: 4,
    user: "Salma L.",
    content: "The solar energy car kit taught my kids about renewable energy in such a hands-on way. They understand concepts now that would have been abstract before. Highly recommend!",
    rating: 5,
    date: "March 8, 2025",
  },
  {
    id: 5,
    user: "Senda.",
    content: "Love how these STEM toys combine play with learning. My 8-year-old doesn't even realize she's doing math and science - she just knows she's having fun building and experimenting.",
    rating: 5,
    date: "March 5, 2025",
  },
  {
    id: 6,
    user: "Amine T.",
    content: "The circuit building board is fantastic! My kids are learning about electronics and engineering principles. The instructions are clear and the results are rewarding.",
    rating: 5,
    date: "March 2, 2025",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="SECTION BELOW"
          data={newArrivalsData}
          viewAllLink="/shop#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="TOP SELLING"
            data={topSellingData}
            viewAllLink="/shop#top-selling"
          />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}