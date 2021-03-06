import React from "react";
import { Text } from "react-native";

export default function ArtQuotes(props) {
  return (
    <Text style={props.style}>
      {artQuotes[Math.floor(Math.random() * artQuotes.length)]}
    </Text>
  );
}

const artQuotes = [
  "'Every child is an artist; the problem is staying an artist when you grow up' – Pablo Picasso",
  "'If you hear a voice within you say, ‘You cannot paint,’ then by all means paint, and that voice will be silenced' – Vincent Van Gogh",
  "'Creativity takes courage.' – Henri Matisse",
  "'Don’t think about making art, just get it done. Let everyone else decide if it’s good or bad, whether they love it or hate it. While they are deciding, make even more art.' – Andy Warhol",
  "'Art is a collaboration between God and the artist, and the less the artist does the better.' – Andre Gide",
  "'We don’t make mistakes, just happy little accidents.' – Bob Ross",
  "'Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.' – Leonardo da Vinci",
  "'Every artist was first an amateur.' – Ralph Waldo Emerson",
  "'There is nothing more truly artistic than to love people.' – Vincent van Gogh",
  "'Art washes away from the soul the dust of everyday life.' – Pablo Picasso",
  "'Color is my day-long obsession, joy and torment.' – Claude Monet",
  "'I found I could say things with color and shapes that I couldn’t say any other way – things I had no words for.' – Georgia O’Keeffe",
  "'I hold that the perfection of form and beauty is contained in the sum of all men.' – Albrecht Durer",
  "'Art is not what you see, but what you make others see.' – Edgar Degas",
  "'In art, what we want is the certainty that one spark of original genius shall not be extinguished.' – Mary Cassatt",
  "'A work of art which isn’t based on feeling isn’t art at all.' – Paul Cézanne",
  "'Life is art. Art is life. I never separate it.' – Ai Weiwei",
  "'Creativity is contagious, pass it on.' – Albert Einstein",
  "'Everybody born comes from the Creator trailing wisps of glory. We come from the Creator with creativity. I think that each one of us is born with creativity.' – Maya Angelou",
  "'Have no fear of perfection, you’ll never reach it.' – Salvador Dali",
  "'You can’t wait for inspiration, you have to go after it with a club.' – Jack London",
  "'Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.' – George Bernard Shaw",
  "'Creativity is more than just being different. Anybody can plan weird; that’s easy. What’s hard is to be as simple as Bach. Making the simple, awesomely simple, that’s creativity.' – Charles Mingus",
  "'Originality is nothing but judicious imitation.' – Voltaire",
  "'Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.' – Ray Bradbury",
  "'Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn’t really do it, they just saw something. It seemed obvious to them after a while.' – Steve Jobs",
  "'Creativity is a drug I cannot live without.' – Cecil B. DeMille",
  "'You see things; and you say, ‘Why?’ But I dream things that never were; and I say, ‘Why not’?' – George Bernard Shaw",
  "'You can’t use up creativity. The more the you use, the more you have.' –Maya Angelou",
  "'Passion is one great force that unleashes creativity, because if you’re passionate about something, then you’re more willing to take risks.' – Yo-Yo Ma",
  "'It is wise to learn; it is God-like to create.' – John Saxe",
  "'Creativity is piercing the mundane to find the marvelous.' – Bill Moyers",
  "'Creativity is a natural extension of our enthusiasm.' – Earl Nightingale",
  "'Creative work is a gift to the world and every being in it. Don’t cheat us of your contribution. Give us what you’ve got.' – Steven Pressfield",
  "'Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.' – Scott Adams",
  "'Art is the stored honey of the human soul.' – Theodore Dreiser",
  "'Art enables us to find ourselves and lose ourselves at the same time.' – Thomas Merton",
  "'Painting is easy when you don’t know how, but very difficult when you do.' – Edgar Degas",
  "'I think of art as the highest level of creativity. To me, it is one of the greatest sources of enjoyment.' – David Rockefeller",
  "'To practice any art, no matter how well or how badly, is a way to make your soul grow, for heaven’s sake. So do it.' – Kurt Vonnegut",
  "'The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and draw and build and play and dance and live only as you can.' – Neil Gaiman",
  "  'Creativity comes from a conflict of ideas.' – Donatella Versace",
  "'I am seeking. I am striving. I am in it with all my heart.' – Vincent van Gogh",
  "'If I could say it in words there would be no reason to paint.' – Edward Hopper",
  "'They always say time changes things, but you actually have to change them yourself.' – Andy Warhol",
  "'Great art picks up where nature ends.' – Marc Chagall",
  "'The position of the artist is humble. He is essentially a channel.' – Piet Mondrian",
  "'Those who do not want to imitate anything, produce nothing.' – Salvador Dali",
  "'The job of the artist is always to deepen the mystery.' – Francis Bacon",
  "'To create one’s own world takes courage.' – Georgia O’Keeffe",
  "'The main thing is to be moved, to love, to hope, to tremble, to live.' – Auguste Rodin",
  "'It is important to express oneself…provided the feelings are real and are taken from you own experience.' – Berthe Morisot",
  "'To be an artist is to believe in life.' – Henry Moore",
  "'Every good painter paints what he is.' – Jackson Pollock",
  "'In art, the hand can never execute anything higher than the heart can imagine.' – Ralph Waldo Emerson",
  "'Whether you succeed or not is irrelevant, there is no such thing.  Making your unknown known is the important thing.' – Georgia O’Keeffe",
  "'What moves men of genius, or rather what inspires their work, is not new ideas, but their obsession with the idea that what has already been said is still not enough.' – Eugene Delacroix",
  "'Art must be an expression of love or it is nothing.' – Marc Chagall",
  "'Don’t be an art critic, but paint, there lies salvation.' – Paul Cézanne",
  "'If I create from the heart, nearly everything works; if from the head, almost nothing.' – Marc Chagall",
  "'A good artist has less time than ideas.' – Martin Kippenberger",
  "'I never paint dreams or nightmares. I paint my own reality.' – Frida Kahlo",
  "'I paint for myself. I don’t know how to do anything else, anyway. Also, I have to earn my living, and occupy myself.' – Francis Bacon",
  "'There is no must in art because art is free.' – Wassily Kandinsky",
  "'Poor is the pupil who does not surpass his master.' – Leonardo da Vinci",
  "'If people knew how hard I worked to get my mastery, it wouldn’t seem so wonderful at all.' – Michelangelo",
  "'Nature is not only all that is visible to the eye, it also includes the inner pictures of the soul.' – Edvard Munch",
  "'Painting is a means of self-enlightenment.' – John Olsen",
  "'Art is the only way to run away without leaving home.' – Twyla Tharp",
  "'An artist cannot fail; it is a success to be one.' – Charles Horton Cooley",
  "'One can have no smaller or greater mastery than mastery of oneself.' –Leonardo da Vinci",
  "'The aim of art is to represent not the outward appearance of things, but their inward significance.' – Aristotle",
  "'No great artist ever sees things as they really are. If he did, he would cease to be an artist.' – Oscar Wilde",
  "'Painting is just another way of keeping a diary.' – Pablo Picasso",
  "'Life beats down and crushes the soul and art reminds you that you have one.' – Stella Adler",
  "'I want to touch people with my art. I want them to say, ‘he feels deeply, he feels tenderly.' – Vincent Van Gogh",
  "'Art is a lie that makes us realize truth.' – Pablo Picasso",
  "'An artist is not paid for his labor but for his vision.' – James McNeill Whistler",
  "'Great things are done by a series of small things brought together.' – Vincent Van Gogh",
  "'Inspiration does exist, but it must find you working.' – Pablo Picasso",
  "'The artist’s world is limitless. It can be found anywhere, far from where he lives or a few feet away. It is always on his doorstep.' – Paul Strand",
  "'Be who you are and say what you feel because those who mind don’t matter and those who matter don’t mind.' – Dr. Seuss",
  "'If a man devotes himself to art, much evil is avoided that happens otherwise if one is idle.' – Albrecht Dürer",
  "'It took me four years to paint like Raphael, but a lifetime to paint like a child.' – Pablo Picasso",
  "'Art is never finished, only abandoned.' – Leonardo Da Vinci",
  "'Everything has its beauty, but not everyone sees it.' – Andy Warhol",
  "'If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.' – Émile Zola",
  "'I dream of painting and then I paint my dream.' – Vincent Van Gogh",
  "'The world of reality has its limits; the world of imagination is boundless.' – Jean-Jacques Rousseau",
  "'A man paints with his brains and not with his hands.' – Michelangelo",
  "'The object isn’t to make art, it’s to be in that wonderful state which makes art inevitable.' – Robert Henri",
  "'I invent nothing, I rediscover.' – Auguste Rodin",
  "'I would rather die of passion than of boredom.' – Vincent van Gogh",
  "'Every artist dips his brush in his own soul, and paints his own nature into his pictures.' – Henry Ward Beecher",
  "'The chief enemy of creativity is ‘good’ sense.' – Pablo Picasso",
  "'Creativity is magic. Don’t examine it too closely.' – Edward Albee",
  "'Art is not a thing, it is a way.' – Elbert Hubbard",
  "'Color is the place where our brain and the universe meet.' – Paul Klee",
  "'Art is a line around your thoughts.' – Gustav Klimt",
  "'Learn the rules like a pro so you can break them like an artist.' – Pablo Picasso",
];
