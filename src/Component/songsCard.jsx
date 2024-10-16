function SongCard() {
    <div className="w-full h-screen bg-orange-500">
  <div className="  text-white p-6">
    <h1 className="text-2xl font-bold text-center mb-6">Singers and Their Songs</h1>

    {selectedSinger ? (
      <div>
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={handleBackClick}
        >
          Back to Singers
        </button>
        <h2 className="text-xl font-semibold">{selectedSinger.name}'s Songs</h2>
        <div className="mt-4 space-y-3">
          {selectedSinger.songs.map((song, index) => (
            <div key={index} className="bg-yellow-500 p-4 rounded-lg shadow-md">
              <img
                src={`${process.env.NODE_ENV === 'production'
                  ? 'https://hasan-5uhhoiksr-hasan-siddiquis-projects.vercel.app'
                  : 'http://localhost:3000'}${song.songImg}`}
                alt={song.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <p className="font-medium">{song.title}</p>
              {song.url ? (
                <audio controls className="w-full mt-2">
                  <source
                    src={`${process.env.NODE_ENV === 'production'
                      ? 'https://hasan-5uhhoiksr-hasan-siddiquis-projects.vercel.app'
                      : 'http://localhost:3000'}${song.url}`}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <p>No audio available</p>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {singers.map((singer, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg"
            onClick={() => handleSingerClick(singer)}
          >
            <img
              src={`${process.env.NODE_ENV === 'production'
                ? 'https://hasan-5uhhoiksr-hasan-siddiquis-projects.vercel.app'
                : 'http://localhost:3000'}${singer.picture}`}
              alt={singer.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold text-red-600 mt-4">{singer.name}</h2>
          </div>
        ))}
      </div>
    )}
  </div>
</div>
}

export default SongCard;