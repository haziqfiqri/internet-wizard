import { getNowPlaying } from "@/utils/spotify";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function GET(req: NextRequest, res: NextResponse) {
  if (req.method === "GET") {
    const response = await getNowPlaying();

    if (
      response.status === 204 ||
      response.status > 400 ||
      response.data.currently_playing_type !== "track"
    ) {
      return NextResponse.json(
        {
          status: 200,
          isPlaying: false,
        },
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, s-maxage=180, stale-while-revalidate=90",
          },
        }
      );
    }

    const data = {
      isPlaying: response.data.is_playing,
      title: response.data.item.name,
      album: response.data.item.album.name,
      artist: response.data.item.album.artists
        .map((artist: any) => artist.name)
        .join(", "),
      albumImageUrl: response.data.item.album.images[0].url,
      songUrl: response.data.item.external_urls.spotify,
    };

    return NextResponse.json(
      {
        status: 200,
        data,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=180, stale-while-revalidate=90",
        },
      }
    );
  }
}
