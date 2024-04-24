const mockUrls = [
  "https://previewed.app/static/d6e038d1c6ea96b3137c5b5384b41782/586d3/iphone_mockups.png",
  "https://previewed.app/static/a25e1c704cb19b9cdadaacf126bdeb4f/5b0a1/device_animations.png",
  "https://i.imgur.com/mX4Y0ek_d.webp?maxwidth=520&shape=thumb&fidelity=high",
  "https://i.imgur.com/wJGm5Sk_d.webp?maxwidth=520&shape=thumb&fidelity=high",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
})); 


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />            
      </div>
        ))}
      </div>
    </main>
  );
}
