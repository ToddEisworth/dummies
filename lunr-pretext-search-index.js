var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Todd Eisworth  Department of Mathematics  Ohio University    Menachem Kojman  Department of Mathematics  Ben-Gurion University of the Negev        "
},
{
  "id": "sec-1-1-functions-ideals-filters",
  "level": "1",
  "url": "sec-1-1-functions-ideals-filters.html",
  "type": "Section",
  "number": "1.1",
  "title": "Functions, ideals, and filters",
  "body": " Functions, ideals, and filters   Ideals and Filters  Suppose is a non-empty set, and let be the class of ordinal-valued functions with domain . This structure can be partially-ordered by comparing functions pointwise, setting if and only if for all . This is certainly a natural way to impose some organization on , but it is a bit intractable because such functions can intertwine in complicated ways and arbitrary functions in are unlikely to be comparable under the pointwise order.    Suppose is a non-empty set.    A collection of subsets of is an ideal on if it satisfies     and ,    if and then , and    if and then .      A collection of subsets of is a filter on if it satisfies     and ,    if and then , and    if and then .        An ideal on should be thought of as a collection of negligible or small subsets of , while filters on capture the dual notion of being substantial or large . This basic intuition motivates much of the way we think about these objects. In both definitions, the first requirement imposes a non-triviality condition: we ask that the collections are non-empty without containing every subset of . On a few occasions, we may relax this condition and talk about the improper ideal , which corresponds to the degenerate case , but we will warn the reader ahead of time. We will also formulate most of our discussion in terms of ideals, but keep in mind that almost everything can be stated in terms of filters as well.  We turn now to some basic vocabulary:    Suppose is an ideal on .    The domain of , , is defined to be the set .    We define , the collection of -positive subsets of (or the co-ideal determined by ), by .    The filter dual to , denoted , is defined as .    If is an -positive subset of , then we define , the restriction of to , by     If is a subset of with , then we define , the extension of by , to be        We pause for a moment to examine how the preceding definition plays out in the context of some standard examples.   The Ideal $  Our first example is a familar one: start with the set of natural numbers , and take to be the Frechet ideal  on consisting of all finite sets of natural numbers. This satisfies the requirements for being an ideal with , and a subset of is -positive if and only if it is infinite. The corresponding dual filter (also known as the Frechet filter ) consists of all of the co-finite subsets of .    If we take to be the set of even numbers, then both and its complement are -positive so both and are also ideals on . Note that a set is in if and only if it contains only finitely many even numbers, and a set is in if and only if contains only finitely many odd numbers.    We could just as easily consider to be an ideal on any set containing : will still be a subset of satisfying the definition of an ideal. If is a proper subset of , then will be a proper subset of , the ideal of finite subsets of . This is where the notion of domain is helpful: the domain of will remain , even if we decide for some reason to view it as an ideal on a larger set.    Suppose is a non-empty set and is the collection of ideals on ordered by inclusion. Since the increasing union of a sequence of ideals is again an ideal on , we know there are ideals on that are maximal, in the sense that they are not properly contained in any other ideal. Such maximal ideals are called prime ideals , and their dual filters (which are also maximal elements of a suitable partial order) are called ultrafilters . If is a prime ideal then and coincide, so a set is in if and only if its complement is not. This means that for we have , and if is in then as well.     Almost Everywhere  As soon as we fix an ideal on , we get a natural way to speak about a property holding almost everywhere: we can interpret this as meaning that the set of which fail to have the property is in . This is in accord with our intuition that sets in the ideal are negligible, and of course it is also equivalent to stating that the set of that do have the property is in the filter dual to . The following definition captures this idea using some tailor-made quantifiers.    Let be an ideal on the set .    If is a formula with one free variable, then will mean the set of for which fails is in , or, more informally, holds for -almost every in .    Similarly, we define to mean that there is true for an -positive set of .      The following easy proposition lays out some of the basic properties of these quantifiers. We leave the proof as an exercise.    Let be an ideal on , and let be a formula with one free variable.    If holds, then so does . The reverse implication need not hold.    The statement is equivalent to .    The statement is equivalent to       Most of the time, we are going to be using variants of two basic instances of the above framework: when two functions are equal almost everywhere, and when one function is below another almost everywhere. The following definitions given names to some of the objects we will need to consider:    For functions and in we define:                   In a similar way, we can define sets , and .    The sets defined above allow us to make precise the idea of our relations holding almost everywhere .    Given an ideal on , we define relations , , , and between functions in as follows:                          The above notation does what we want. For example, holds if and only if for almost all (as measured by the ideal ). In symbols, We do need to be a little careful with how we interpret negations in this framework. Since our ideals need not be maximal, there is potentially a big difference between statements such as and . To see why, we can just write out the definitions: while These will coincide if is a maximal ideal on , but in general they are going to mean different things. For example, if is the smallest ideal on , then says that and disagree everywhere on , while says that and disagree on at least one value. These are very different concepts if has more than a single element!  Now that we have our notation fixed, we can start examining the behavior of these relations. Our first stop is a proposition whose proof follows almost immediately from the relevant definitions.    Let be an ideal on a non-empty set .    The relation is transitive and reflexive on .    The relation is transitive on .    If is a proper ideal, then anti-reflexive.    The relation is not anti-symmetric on unless .       See Exercise   Thus, the relation is a quasi-order on the class , while is a strict partial order. Much of our work will be exploring the structure of these relations in the context of subsets of : given a set of ordinal-valued functions defined on and a (proper) ideal on , we will be mainly be looking at the quasi-ordered set as well as the corresponding strictly partial ordered set   Of course, there is no need to restrict ourselves to the order and equality relations on ordinals. Given an arbitrary binary relation on the ordinals, we get a corresponding binary relation on defined by Again, the point is that will hold if and only if for almost every in .    More Examples  Let us now move on to examples illustrating two extreme special cases.   The Improper Ideal  In this example, we consider what happens we relax our requirement that ideals on a set are proper subsets of . Such an ideal is called improper , and this situation is not very interesting, because every subset of is in the ideal , and hence considered to be negligible. It follows that given any binary relation on ordinals the will hold for any two functions and in . To make matters worse, this also means that will hold, because is also a binary relation on ordinals. Thus, for example, we will have both and for any two functions in .   The lesson of the previous example is that modulo an improper ideal, everything collapses into a single uninteresting heap. This is why we focus our attention on the proper ideals.   The Trivial Ideal  In stark contrast with the previous example, what happens if is the smallest possible ideal on ? In this setting, the relations and correspond to and defined earlier, while is the usual identity relation. More generally, if is a binary relation on the ordinals and , then holds if and only if holds for every in .   Of course, there is a lot of room between these two extremes as we have seen previously with Examples  and  . The following simple proposition will help with our understanding, as it shows us that enlarging an ideal on will preserve the sorts of relationships we have been considering.   Suppose are ideals over a set . Then for every binary relation on the ordinals and functions and in ,     Proof. Suppose are ideals on . If then is in , hence in as well. Thus as well. ◻  As a corollary, we see that relationships between functions that hold modulo the smallest ideal on hold modulo every ideal on . More precisely, if is any binary relation on and for all then we know for every ideal over . Informally, if something happens for every  , then it necessarily happens for almost every  , no matter which particular ideal on we are working with.  It is helpful to have a dynamic picture of how a relation of the form  evolves as the ideal under consideration gets larger. When the ideal on grows, it becomes easier for two functions to be related through one of and as the larger ideal will make more decisions about when something can be considered negligible and ignored. One may keep enlarging the ideal until we hit a maximal proper ideal, at which point all the relevant decisions have been made in a coherent fashion. Any further attempt to extend the ideal will result in things collapsing into the situation of Example  .   One way of generalizing Example  to other infinite sets is to just define to consist of the finite subsets of . If is a set of ordinals, then we can also look at , the ideal of bounded subsets of . In the case where is , any infinite subset of is -positive, while the -positive sets must be uncountable.   Lorem Ipsum.  We will revisit these examples throughout our narrative and develop others, but even our brief discussion highlights one of the central issues in pcf theory: there is conservation of complexity lurking in the background when we study modulo a proper ideal on . If (so the ideal is as simple as possible) then the structure of under the relations and is quite complicated. On the other hand, the relation becomes linear if is dual to an ultrafilter, but of course then is likely to be a very complex object. Pcf theory gives a careful analysis of this relationship, and shows us that in many cases we can use simply describable ideals to obtain a high degree of organization among functions.   "
},
{
  "id": "def-1",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#def-1",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  Suppose is a non-empty set.    A collection of subsets of is an ideal on if it satisfies     and ,    if and then , and    if and then .      A collection of subsets of is a filter on if it satisfies     and ,    if and then , and    if and then .       "
},
{
  "id": "def-2",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#def-2",
  "type": "Definition",
  "number": "1.1.2",
  "title": "",
  "body": "  Suppose is an ideal on .    The domain of , , is defined to be the set .    We define , the collection of -positive subsets of (or the co-ideal determined by ), by .    The filter dual to , denoted , is defined as .    If is an -positive subset of , then we define , the restriction of to , by     If is a subset of with , then we define , the extension of by , to be       "
},
{
  "id": "ideals-filters-8",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#ideals-filters-8",
  "type": "Example",
  "number": "1.1.3",
  "title": "The Ideal <span class=\"process-math\">\\(\\Fin(\\omega)\\)<\/span>$.",
  "body": " The Ideal $  Our first example is a familar one: start with the set of natural numbers , and take to be the Frechet ideal  on consisting of all finite sets of natural numbers. This satisfies the requirements for being an ideal with , and a subset of is -positive if and only if it is infinite. The corresponding dual filter (also known as the Frechet filter ) consists of all of the co-finite subsets of .  "
},
{
  "id": "ideals-filters-9",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#ideals-filters-9",
  "type": "Example",
  "number": "1.1.4",
  "title": "",
  "body": " If we take to be the set of even numbers, then both and its complement are -positive so both and are also ideals on . Note that a set is in if and only if it contains only finitely many even numbers, and a set is in if and only if contains only finitely many odd numbers.  "
},
{
  "id": "ideals-filters-10",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#ideals-filters-10",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " We could just as easily consider to be an ideal on any set containing : will still be a subset of satisfying the definition of an ideal. If is a proper subset of , then will be a proper subset of , the ideal of finite subsets of . This is where the notion of domain is helpful: the domain of will remain , even if we decide for some reason to view it as an ideal on a larger set.  "
},
{
  "id": "ideals-filters-11",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#ideals-filters-11",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": " Suppose is a non-empty set and is the collection of ideals on ordered by inclusion. Since the increasing union of a sequence of ideals is again an ideal on , we know there are ideals on that are maximal, in the sense that they are not properly contained in any other ideal. Such maximal ideals are called prime ideals , and their dual filters (which are also maximal elements of a suitable partial order) are called ultrafilters . If is a prime ideal then and coincide, so a set is in if and only if its complement is not. This means that for we have , and if is in then as well.  "
},
{
  "id": "def-blah",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#def-blah",
  "type": "Definition",
  "number": "1.1.7",
  "title": "",
  "body": "  Let be an ideal on the set .    If is a formula with one free variable, then will mean the set of for which fails is in , or, more informally, holds for -almost every in .    Similarly, we define to mean that there is true for an -positive set of .     "
},
{
  "id": "prop-",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#prop-",
  "type": "Proposition",
  "number": "1.1.8",
  "title": "",
  "body": "  Let be an ideal on , and let be a formula with one free variable.    If holds, then so does . The reverse implication need not hold.    The statement is equivalent to .    The statement is equivalent to      "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#def-",
  "type": "Definition",
  "number": "1.1.9",
  "title": "",
  "body": "  For functions and in we define:                   In a similar way, we can define sets , and .   "
},
{
  "id": "def-asd",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#def-asd",
  "type": "Definition",
  "number": "1.1.10",
  "title": "",
  "body": "  Given an ideal on , we define relations , , , and between functions in as follows:                         "
},
{
  "id": "prop-asdfs",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#prop-asdfs",
  "type": "Proposition",
  "number": "1.1.11",
  "title": "",
  "body": "  Let be an ideal on a non-empty set .    The relation is transitive and reflexive on .    The relation is transitive on .    If is a proper ideal, then anti-reflexive.    The relation is not anti-symmetric on unless .     "
},
{
  "id": "almost-everywhere-13",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#almost-everywhere-13",
  "type": "Proof",
  "number": "1.1.2.1",
  "title": "",
  "body": " See Exercise  "
},
{
  "id": "more-examples-3",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#more-examples-3",
  "type": "Example",
  "number": "1.1.12",
  "title": "The Improper Ideal.",
  "body": " The Improper Ideal  In this example, we consider what happens we relax our requirement that ideals on a set are proper subsets of . Such an ideal is called improper , and this situation is not very interesting, because every subset of is in the ideal , and hence considered to be negligible. It follows that given any binary relation on ordinals the will hold for any two functions and in . To make matters worse, this also means that will hold, because is also a binary relation on ordinals. Thus, for example, we will have both and for any two functions in .  "
},
{
  "id": "more-examples-5",
  "level": "2",
  "url": "sec-1-1-functions-ideals-filters.html#more-examples-5",
  "type": "Example",
  "number": "1.1.13",
  "title": "The Trivial Ideal.",
  "body": " The Trivial Ideal  In stark contrast with the previous example, what happens if is the smallest possible ideal on ? In this setting, the relations and correspond to and defined earlier, while is the usual identity relation. More generally, if is a binary relation on the ordinals and , then holds if and only if holds for every in .  "
},
{
  "id": "unbounded-sets-and-cofinal-sets",
  "level": "1",
  "url": "unbounded-sets-and-cofinal-sets.html",
  "type": "Section",
  "number": "1.2",
  "title": "Unbounded sets and cofinal sets",
  "body": " Unbounded sets and cofinal sets   Cofinal and unbounded  We will begin this section in a more abstract setting than we ended the previous one, working with an arbitrary quasi-ordered set instead of just ordinal-valued functions.    Let be a set (or occasionally a proper class), while is a quasi-order on .    A subset of is -cofinal (or just cofinal if the context is clear) in if     We say that a subset of is -bounded (or just bounded ) in if and is said to be -unbounded (or just unbounded ) if it is not bounded.     is -directed if every finite subset of is -bounded in  .     is a -maximum element of if     The above concepts also make sense if we replace the quasi-order with a strict partial order on .         Suppose has a -maximum element . Then is -bounded in , while the singleton is cofinal in . In this situation, has no unbounded subsets, while is -directed for trivial reasons.     Notice that the preceding example gives us an example where contains a -bounded -cofinal subset. In fact, this sort of example is essentially unique: it not hard to show that has a maximum element if and only if it has a bounded cofinal subset. We will be working primarily with structures where this will not happen. Our next examples are typical, and takes us back to the context of the preceding section.   Let , and let be the smallest ideal on  . We will take to be the set of functions from to (often referred to as the Baire space in the sequel), and let be the subset of consisting of constant functions. The set is unbounded in : given any , if we define the function to be constant with value , then . On the other hand, is not cofinal in because the identity function is not bounded modulo  by any function in . If we replace by the larger ideal of all finite subsets of  , then the identity function witnesses that is bounded in .       Cardinal Characteristics  Our next definition introduces some major players in our discussion, defining two cardinal characteristics of makes sense in the general context of Definition  , but we will formulate them in terms of our basic context because that is the only situation where we will use them. With that in mind, throughout the rest of this section we assume that is a (proper) ideal on a non-empty set  .   Let be a quasi-order without a maximum element.    The cardinal is defined to be the least cardinality of an unbounded subset of .    The cardinal is defined to be the least cardinality of a cofinal subset of .    If is a structure of the form where for some set and is an ideal on , then we will use the notation and for the cardinals and .    There are a couple of minor technical issues that arise when discussing unbounded sets. If has a -maximum element, then will have no unbounded subsets at all and the definition of is problematic. If we find ourselves in such a situation, we will just define to be , a formal symbol that is considered to be larger than any cardinal. Notice that it is possible for to be finite: this happens if and only if is NOT  -directed. We will almost always work in directed structures without a maximum element, and this situation happens if and only the corresponding cardinal is infinite.  These sorts of problems do not arise with as is always cofinal in itself and so will hold automatically. It is possible for to be finite as well, and if and only if has a maximum element. If is -directed, then is finite if and only if .  If we move now to structures of the form then the following related definitions make sense:   Assume is an ideal on the set , and .    The pointwise supremum of , denoted , is the function defined by     We say is supremum-bounded in if there exists such that .    We define to be the least cardinality of a subset of which is not supremum bounded in . If (and therefore every subset of ) is supremum bounded in we let .    Whereas the cardinals and depend only on the order-theoretic structure the -equivalence classes of , we have a different situation with the definition of : taking the supremum of a set of functions requires us to work with actual functions instead of just equivalence classes. The following example illustrates the problem.   Let be and let be the ideal . We will define two sets of functions and as follows. First, for any countable limit ordinal we let be the function on that is constant with value , and let . Next, we let whenever is an infinite countable ordinal, and for we define by and then define .  The structures and are essentially the same modulo as the functions and agree almost everywhere for each . The cardinal characteristics defined in Definition  will be exactly the same in each structure, as these cardinals are defined based on order-theoretic relations that depend only on the -equivalence classes of functions. However, the set is supremum bounded in , while is NOT supremum bounded in , even though for each . This phenomenon does not occur with the other pieces of Definition  .   We mentioned earlier that the cardinal characteristics of the continuum and are special cases of the above definition, for if we take to be , to be , and to be the Baire Space of functions mapping to , then and are just the bounding number and the dominating number .    Directedness  Many things become clearer if we strengthen our assumptions to require to be -directed. In this case, a subset of is -cofinal in if and only if it is -cofinal, and this just requires the observation that in a -directed , for any there is a with . Thus, if is -directed, we can just say is cofinal in without needing to specify which of the structures and we mean.  The notions of -directedness and -directedness are closely related as well, and they coincide under under the additional assumption that for any there is a such that . Some assumption like this is necessary, as the following example illustrates.   Let and . Partition into countably many disjoint infinite sets for , and let be the characteristic function of , that is, The collection is -directed; in fact, the sequence is -increasing. However, is not -directed, as no two elements of are -comparable.  What can we say about the relationship between the cardinal and ? If we know that every cofinal subset of is unbounded, then it is clear that is at most . The only way this might fail is in the situation where has a maximum element, as then will have no unbounded subsets at all (and hence is set to by convention) while will be equal to . The following proposition records the situation in a more typical setting.   If is -directed without a maximum element then   Looking at the situation where we compare two ideals, we have the following natural result as well.   If are ideals over and , then     , and     .      Proof. If does not have an unbounded subset, then the result follows because of our convention that will be set to . Thus, it suffices to note that any unbounded subset of is unbounded in as well. But this is equivalent to showing that bounded subsets of are bounded in , and this follows immediately from Proposition  . A similar argument shows that if a set is cofinal in , then it is cofinal in the structure as well. This immediately implies . ◻   If is directed without a maximum element, then is an infinite regular cardinal.    Proof. Let . Our assumptions imply that is an infinite cardinal, so we need only worry about proving is regular. It suffices to prove that a union of fewer than subsets of each of cardinality less than must be bounded. So suppose and for each let be a subset of of cardinality less than . Since each is bounded, we can find a function in witnessing this. The collection is also bounded in , and any function that -bounds will bound . ◻  If we strengthen the assumption of Proposition  and require -directness, then we can find unbounded subsets of that can be enumerated as a -increasing sequences of length . In fact, though, the following proposition actually shows us something slightly stronger.   If is -directed then for any cofinal subset of there is a -increasing sequence of elements of that is unbounded in  .    Proof. Our hypothesis implies that is -directed without a maximum element, so is an infinite regular cardinal by Proposition  . Let be an unbounded subset of , and let be cofinal in . We will define functions by induction on , making sure to arrange both and that for . This is straightforward to do: at a stage we will have the set at our disposal, and this set is bounded modulo by some function because it is of cardinality less than . Since is -directed and is cofinal in , we can find with . Now the sequence is a -increasing sequence of functions from , and it is unbounded in because was. ◻   Let be  , and let enumerate the finite subsets of  . Given , we let be the function that is constant with value , and define another function by Thus, the functions and agree and have value outside of , while on the set the function takes value . Let and be the corresponding sets of functions. If we let , then is -increasing and hence -directed. On the other hand, is not  -directed: if then there is no with .   "
},
{
  "id": "def-",
  "level": "2",
  "url": "unbounded-sets-and-cofinal-sets.html#def-",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  Let be a set (or occasionally a proper class), while is a quasi-order on .    A subset of is -cofinal (or just cofinal if the context is clear) in if     We say that a subset of is -bounded (or just bounded ) in if and is said to be -unbounded (or just unbounded ) if it is not bounded.     is -directed if every finite subset of is -bounded in  .     is a -maximum element of if     The above concepts also make sense if we replace the quasi-order with a strict partial order on .     "
},
{
  "id": "cofinal-vs.-unbounded-4",
  "level": "2",
  "url": "unbounded-sets-and-cofinal-sets.html#cofinal-vs.-unbounded-4",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " Suppose has a -maximum element . Then is -bounded in , while the singleton is cofinal in . In this situation, has no unbounded subsets, while is -directed for trivial reasons.  "
},
{
  "id": "cofinal-vs.-unbounded-6",
  "level": "2",
  "url": "unbounded-sets-and-cofinal-sets.html#cofinal-vs.-unbounded-6",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " Let , and let be the smallest ideal on  . We will take to be the set of functions from to (often referred to as the Baire space in the sequel), and let be the subset of consisting of constant functions. The set is unbounded in : given any , if we define the function to be constant with value , then . On the other hand, is not cofinal in because the identity function is not bounded modulo  by any function in . If we replace by the larger ideal of all finite subsets of  , then the identity function witnesses that is bounded in .  "
},
{
  "id": "sec-1-3-notion-of-equivalence",
  "level": "1",
  "url": "sec-1-3-notion-of-equivalence.html",
  "type": "Section",
  "number": "1.3",
  "title": "A notion of equivalence",
  "body": " A notion of equivalence   Equivalence of subsets of  One of the important lessons of the preceding sections is that arbitrary structures of the form can be complicated, but by imposing some mild conditions (like -directedness, for example) we can obtain somewhat better behavior. In this section, we will begin investigating situations where a (possibly quite complicated) structure might be considered equivalent to another collection of functions whose behavior modulo  is much more organized.  Our plan is to formulate an equivalence relation between subsets of that attempts to capture when two such sets of functions could be said to have the same cofinal behavior. In this section, we will define the relation and explore its basic properties, and in the next section we will try to characterize when sets of functions are equivalent to easily describable families. The notion of equivalence we want to use is as defined as follows:    Suppose is an ideal on , and and are subsets of . We say and are equivalent modulo , written , if for every there is such that , and for every there is such that .    This relation is an equivalence relation on the class of subsets of , and by our previous work, if are ideals over then for subsets and of , if then . We will spend some time investigating how this notion of equivalence interacts with relations such as , with an aim of eventually detecting when a set of functions is equivalent modulo to a set of functions that is nicely organized. The main point of the next couple of results is to illustrate how preserves many of the properties and cardinals we have considered to this point. For example, the cardinals and depend only on the -class of :    Let be an ideal on the set , and suppose and are families of functions from with . Then and      Even though these proofs are easy, we will still give some details as we want to highlight a style of argument that will come to the forefront in Section I. when we discuss Tukey equivalence. By our assumptions, we can fix functions and such that and for all and .  We show first that maps unbounded subsets of to unbounded subsets of . Suppose now that is a subset of whose image is bounded in , say by . Then is a function in , and for any function we have which shows us that is bounded back in . This then implies , and the symmetric argument establishes ,  Now suppose that is a cofinal subset of . Given we can choose such that , and conclude and hence the image of under is cofinal in . Thus maps cofinal subsets of to cofinal subsets of , and so . The symmetric argument will finish the proof of . ◻   The lesson from the above is that the cardinals and are really characteristics of the equivalence class of under . Moving on, we next show that our notion of equivalence preserves directedness under both and . (A generalization of this result to stronger forms of directedness appears in Exercise  below.)    Suppose and are sets of functions that are equivalent modulo . Then     is -directed if and only if is -directed, and     is -directed if and only if is -directed.       We prove only one direction of (2), so assume is -directed and let the functions and witness the equivalence as in the proof of Proposition  . Given a finite subset of , we can find a function with for all , and then will be the required upper bound for in  . ◻     Downward closures of subsets of  We close this section with another natural formulation of that will give us a chance to address some technical issues that lurk in the background of our discussions. We would like to state and prove a result that says, roughly, that two sets of functions are equivalent modulo if and only if they determine the same initial segment of modulo . But what exactly does this mean? To do this precisely, we need to grapple with the fact that is a proper class, and the -equivalence classes of individual functions are proper classes as well. The difficulties are easy enough to manage because it is intuitively clear what we should mean by the expression modulo but we will do it with some care this first time through.  Given subsets and of , we know that is also a set of functions. Given any set of functions from with , we can apply the relation on to form equivalence classes without any trouble: each of these equivalence classes is a subset of , and the set of equivalence classes forms a partially ordered set under the natural extension of to such equivalence classes. If we start just with the set and look at the corresponding collection of equivalence classes then this structure is canonically isomorphic to a substructure of modulo for any set that includes both and .  Given and , let be defined by setting to be the supremum of all ordinals where , and let be the corresponding product . The set is large enough to contain both and , and since it is closed downward under it is also an initial segment of under . Given any function from the proper class , if then for some , and since both and are subsets of we can speak unambiguously about the downward closures of and in : if for some then for some . Similar circumlocutions allow is to essentially ignore the fact that we are dealing with equivalence classes that are prima facie proper classes: we can always capture our situation in a large enough set. Thus, when we talk about the initial segment of modulo determined by a product , we can just treat the proper class of functions that satisfy for some as if it were a set.    Suppose and subsets of . Then if and only if and have the same downward closure in , that is,      See Exercise  . ◻    "
},
{
  "id": "def-main-equivalence-def",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#def-main-equivalence-def",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  Suppose is an ideal on , and and are subsets of . We say and are equivalent modulo , written , if for every there is such that , and for every there is such that .   "
},
{
  "id": "prop-preserve-bounding-dominating",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#prop-preserve-bounding-dominating",
  "type": "Proposition",
  "number": "1.3.2",
  "title": "",
  "body": "  Let be an ideal on the set , and suppose and are families of functions from with . Then and    "
},
{
  "id": "equivalence-of-subsets-of-ona-7",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#equivalence-of-subsets-of-ona-7",
  "type": "Proof",
  "number": "1.3.1.1",
  "title": "",
  "body": " Even though these proofs are easy, we will still give some details as we want to highlight a style of argument that will come to the forefront in Section I. when we discuss Tukey equivalence. By our assumptions, we can fix functions and such that and for all and .  We show first that maps unbounded subsets of to unbounded subsets of . Suppose now that is a subset of whose image is bounded in , say by . Then is a function in , and for any function we have which shows us that is bounded back in . This then implies , and the symmetric argument establishes ,  Now suppose that is a cofinal subset of . Given we can choose such that , and conclude and hence the image of under is cofinal in . Thus maps cofinal subsets of to cofinal subsets of , and so . The symmetric argument will finish the proof of . ◻  "
},
{
  "id": "prop-equiv",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#prop-equiv",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "",
  "body": "  Suppose and are sets of functions that are equivalent modulo . Then     is -directed if and only if is -directed, and     is -directed if and only if is -directed.     "
},
{
  "id": "equivalence-of-subsets-of-ona-10",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#equivalence-of-subsets-of-ona-10",
  "type": "Proof",
  "number": "1.3.1.2",
  "title": "",
  "body": " We prove only one direction of (2), so assume is -directed and let the functions and witness the equivalence as in the proof of Proposition  . Given a finite subset of , we can find a function with for all , and then will be the required upper bound for in  . ◻  "
},
{
  "id": "prop-",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#prop-",
  "type": "Proposition",
  "number": "1.3.4",
  "title": "",
  "body": "  Suppose and subsets of . Then if and only if and have the same downward closure in , that is,    "
},
{
  "id": "downward-closures-of-subsets-of-ona-6",
  "level": "2",
  "url": "sec-1-3-notion-of-equivalence.html#downward-closures-of-subsets-of-ona-6",
  "type": "Proof",
  "number": "1.3.2.1",
  "title": "",
  "body": " See Exercise  . ◻  "
},
{
  "id": "true-cofinality-and-exact-upper-bounds",
  "level": "1",
  "url": "true-cofinality-and-exact-upper-bounds.html",
  "type": "Section",
  "number": "1.4",
  "title": "True cofinality and exact upper bounds",
  "body": " True cofinality and exact upper bounds   True cofinality  We now return to the issue discussed at the beginning of the previous section and ask the natural question of whether we can identify when a subset of is equivalent to a set of functions linearly-ordered by . This is crucial for us, and the following definition is fundamental for pcf theory.    Let be an ideal on the set . A set of functions is said to have true cofinality modulo if is equivalent modulo to a set that is linearly-ordered by .    We will take some time to probe this definition. First, suppose that has true cofinality modulo , witnessed by the subset of . Since we can without loss of generality replace by a cofinal subset, we may assume that the order type of is either  or an infinite regular cardinal.  The case where is a singleton is not very interesting, as this happens if and only if has a maximum. Why? If , then there is an in such that , and it follows easily that has as a maximum. On the other hand, if has a maximum function modulo  , then , and so will have true cofinality in this degenerate sense.  The interesting situation occurs when is -equivalent to some -increasing subset of  whose length is an (infinite) regular cardinal. The following theorem characterizes when this occurs.    Suppose is -directed and is an infinite regular cardinal. Then the following statements are equivalent.     has true cofinality modulo .     .     contains a -increasing and cofinal subset of order-type .       Assume (1), and let be a -increasing sequence in equivalent to . We first see that . To see this, we need to see that any subset of of cardinality less than is bounded, so assume and for each . For each , we can find such that Since is regular and , we know The assumption that provides us with a function with , and therefore for any we have Thus, any subset of of cardinality less than is bounded and Next, we prove . For each we can find a function such that , and we claim that the set is cofinal in . Given , we can choose with , and hence as well. Thus and (2) is established.  Condition (3) follows from (2) by an easy inductive construction. To see that (3) implies (1), note that is equivalent to any of its cofinal subsets. ◻   As a corollary of the above, note that if has true cofinality modulo , then this is necessarily unique. This brings us to the following definition, a definition central to our work.    Suppose is -directed. We say is the true cofinality of modulo , written , if     Notice that we are justified in using the modifier the because if has a true cofinality modulo , then this true cofinality is uniquely determined as being the common value of and . Moreover, if and are equivalent families of functions modulo , then one of them has a true cofinality if and only if the other does, and the values of these true cofinalities are the same.    Exact Upper Bounds  Having now characterized when a set of functions is equivalent (modulo an ideal ) to a -increasing sequence of functions, we take a look at when is equivalent to a product. We have already used the notion of product in our brief treatment of proper classes in the previous section, but we pause to give the official definition.    Suppose is a function in . We define the product of , , by     Clearly is non-empty if and only if is non-zero for all , so we will implicitly assume this is the case whenever we use the notation . Given such a function , we address several natural questions about the structure of . First, note that it is easy to characterize when a product is directed under :    If is an ideal on the set , then is -directed if and only if is a (non-zero) limit ordinal for almost all in .      Proof. Suppose is a limit ordinal for almost all , and let be a finite subset of . If we define then is equal modulo to a function in , and clearly for all .  For the other direction, let and define a function by If , then there is no function such that , and so fails to be -directed. ◻   The question about when a product has true cofinality modulo an ideal turns out to have depths that we will plumb shortly. For now, we provide the following shallow answer that follows immediately from our earlier work.    Suppose is an ideal on the set , and is such that is -directed. Then the following are equivalent:     exists and is equal to .     is a regular cardinal and there is a -increasing and cofinal sequence of length in .      So in the above situation, is an upper bound for the sequence (as each is in ), but also has the property that any must lie below some modulo  . This latter property says that is a smallest upper bound for in a strong sense, and this turns out to be a fundamental idea that we capture in the following definition.    Let be an ideal on , and suppose for some function . We say is an exact upper bound of modulo if for all , if then there exists some such that .    Exact upper bounds arise in several places when one considers products. For an easy example, note that if is never zero, then is an exact upper bound for modulo the smallest ideal , and hence modulo any ideal on . This follows immediately, as a function is in if and only if . Just as easy, we have the following characterization of exact upper bounds in terms of equivalence.    Let be an ideal on the set . The following statements are equivalent for a non-empty :     is an exact upper bound for modulo .     is cofinal in .     .         Proof. See Exercise  . ◻    The next chapter in the book examines exact upper bounds in detail, as understanding when and where they exist will anchor our development of pcf theory.   "
},
{
  "id": "def-tcf",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#def-tcf",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  Let be an ideal on the set . A set of functions is said to have true cofinality modulo if is equivalent modulo to a set that is linearly-ordered by .   "
},
{
  "id": "thm-tcf-equiv",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#thm-tcf-equiv",
  "type": "Theorem",
  "number": "1.4.2",
  "title": "",
  "body": "  Suppose is -directed and is an infinite regular cardinal. Then the following statements are equivalent.     has true cofinality modulo .     .     contains a -increasing and cofinal subset of order-type .     "
},
{
  "id": "true-cofinality-8",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#true-cofinality-8",
  "type": "Proof",
  "number": "1.4.1.1",
  "title": "",
  "body": " Assume (1), and let be a -increasing sequence in equivalent to . We first see that . To see this, we need to see that any subset of of cardinality less than is bounded, so assume and for each . For each , we can find such that Since is regular and , we know The assumption that provides us with a function with , and therefore for any we have Thus, any subset of of cardinality less than is bounded and Next, we prove . For each we can find a function such that , and we claim that the set is cofinal in . Given , we can choose with , and hence as well. Thus and (2) is established.  Condition (3) follows from (2) by an easy inductive construction. To see that (3) implies (1), note that is equivalent to any of its cofinal subsets. ◻  "
},
{
  "id": "def-tcfdefn",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#def-tcfdefn",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  Suppose is -directed. We say is the true cofinality of modulo , written , if    "
},
{
  "id": "def-product-g",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#def-product-g",
  "type": "Definition",
  "number": "1.4.4",
  "title": "",
  "body": "  Suppose is a function in . We define the product of , , by    "
},
{
  "id": "prop-directed-characterization",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#prop-directed-characterization",
  "type": "Proposition",
  "number": "1.4.5",
  "title": "",
  "body": "  If is an ideal on the set , then is -directed if and only if is a (non-zero) limit ordinal for almost all in .   "
},
{
  "id": "exact-upper-bounds-6",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#exact-upper-bounds-6",
  "type": "Proof",
  "number": "1.4.2.1",
  "title": "",
  "body": "  Proof. Suppose is a limit ordinal for almost all , and let be a finite subset of . If we define then is equal modulo to a function in , and clearly for all .  For the other direction, let and define a function by If , then there is no function such that , and so fails to be -directed. ◻  "
},
{
  "id": "prop-simple-eub-char",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#prop-simple-eub-char",
  "type": "Proposition",
  "number": "1.4.6",
  "title": "",
  "body": "  Suppose is an ideal on the set , and is such that is -directed. Then the following are equivalent:     exists and is equal to .     is a regular cardinal and there is a -increasing and cofinal sequence of length in .     "
},
{
  "id": "def-eub",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#def-eub",
  "type": "Definition",
  "number": "1.4.7",
  "title": "",
  "body": "  Let be an ideal on , and suppose for some function . We say is an exact upper bound of modulo if for all , if then there exists some such that .   "
},
{
  "id": "prop-eub-char",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#prop-eub-char",
  "type": "Proposition",
  "number": "1.4.8",
  "title": "",
  "body": "  Let be an ideal on the set . The following statements are equivalent for a non-empty :     is an exact upper bound for modulo .     is cofinal in .     .     "
},
{
  "id": "exact-upper-bounds-13",
  "level": "2",
  "url": "true-cofinality-and-exact-upper-bounds.html#exact-upper-bounds-13",
  "type": "Proof",
  "number": "1.4.2.2",
  "title": "",
  "body": "   Proof. See Exercise  . ◻   "
},
{
  "id": "sec-1-5-tukey",
  "level": "1",
  "url": "sec-1-5-tukey.html",
  "type": "Section",
  "number": "1.5",
  "title": "Tukey Equivalence and Cofinal Similarity",
  "body": " Tukey Equivalence and Cofinal Similarity   Galois-Tukey Connections  In this section, we will generalize our notion of (which operates on sets of ordinal-valued functions with the same domain modulo the same ideal) to Tukey equivalence and Galois-Tukey connections, both of which operate on the more abstract level of quasi-ordered sets. The additional generality will provide us with a streamlined way of comparing the cofinal structures of such objects.    Suppose and are quasi-ordered sets.    A map is a Tukey function if maps unbounded subsets of to unbounded subsets of .    A map is a convergent function if maps cofinal subsets of to cofinal subsets of .    We say is Tukey-reducible to (equivalent, is a Tukey quotient of if there is Tukey function mapping to , and we write this as .    If both and hold then we say and are Tukey equivalent , and we write this as .    A Galois-Tukey connection from to is a pair of functions such that , , and         The following statements are equivalent for quasi-ordered sets and :     , that is, there is a Tukey function from to .    There is a convergent function mapping to .    There is a Galois-Tukey connection from to .        Proof. Suppose first that is a Tukey function. Then for each , the set of must be bounded in , so we can define a function by choosing to bound this set in . We leave the proof that maps cofinal subsets of to cofinal subsets of as an exercise.  Next, suppose maps cofinal sets to cofinal sets. Given , we can let be some element of with the property that This is possible because by our assumption on , the set of for which is not cofinal in , and so such a choice for must exist. Thus, the pair is a Galois-Tukey connection from to .  Now assume and are functions satisfying . It suffices to note that is a Tukey function: if is a subset of whose image under is bounded by some , then shows us that bounds in . Note that the function is also convergent by a similar argument, left to Exercise   ◻   The above result has a couple of corollaries that are useful to us. The first one provides a connection between Tukey reductions and some of the cardinal characteristics we considered early.    Suppose and are quasi-ordered sets with . Then and .     Fix a Tukey and a convergent . Then the image under of an unbounded subset of of minimal cardinality shows us that is at most , and a similar argument using shows us that has a cofinal subset of cardinality at most . ◻   The above corollary is extraordinarily useful for us, as it tells us that the values various cardinals like and are preserved by Tukey equivalence. For example, suppose that and are sets carrying the ideals and respectively, and let and be directed under and respectively. If the structures and are Tukey equivalent, then and . It is also quite useful to note that if and has true cofinality, then so does and the respective true cofinalities are exactly the same. This follows from the above discussion by way of Theorem  . We will explore some related results in the exercises.  Our next corollary simply verifies something that we might expect to be true, given that Tukey equivalence is supposed to indicate that two structures have the same cofinal behavior.    Suppose is a quasi-ordered set. Then is Tukey-equivalent to any of its cofinal subsets.     Suppose is a cofinal subset of . Any cofinal subset of will also be cofinal in , so the inclusion map corresponding to gives us a convergent function mapping to so . For the other direction, we let be some function that assigns to an arbitrary an element of such that (such a function exists as is cofinal in ). Suppose now that is cofinal in . Given we can find an with , and our definition of then tells us . Thus the image of under is a cofinal subset of , and so the convergent map establishes . ◻   This corollary is quite useful, as there are situations where complicated ordered sets have cofinal subsets with much simpler structure. One obvious example of this occurs with true cofinality — having a true cofinality is the same as has a cofinal subset order-isomorphic to a regular cardinal — and so given a -directed set we can see that the statement means simply that is Tukey equivalent to . We look at two additional important examples of this type of phenomenon below.   Suppose is such that is a limit ordinal for all , and for each let .  If we let denote then is an -indexed sequence of regular cardinals.  For each , we can choose a set cofinal in of order-type , and it is clear that the products and are order-isomorphic through the obvious correspondence.  Since is cofinal in , it follows that is Tukey equivalent to the product .  Moreover, this situation persists if we move from to a for some ideal on : it is still the case that is order-isomorphic to a cofinal subset of and hence these two structures are Tukey equivalent.   Our next example shows that under a mild assumption it is possible to find even nicer cofinal subsets of .   Continuing with the notation of Example  , let us now make the additional assumption that the cardinality of is strictly less than each and then define to be the range of (considered as a function from onto ). Our aim is to show that and are essentially the same, in the sense that for any ideal on there is a corresponding ideal on such that and are Tukey equivalent, and vice versa.  We define to be the set of functions in that are constant on the pre-images of elements of under . Thus, a function in gets into if its value at depends only on the value . Our assumption that is less than is used to show that is cofinal in : Given we define by setting It is clear that , and implies , so will be in provided we can show is in . But this is where are assumption comes to the rescue, as in each coordinate the set will be bounded below . The structure is isomorphic to in a natural way as well, for given define through the formula Thus, and are Tukey equivalent by way of Corollary  .  Much more can be said, though, as the function induces a natural correspondence between ideals on and ideals on : given an ideal on (respectively, on ) then we get another ideal on (respectively, on ) by defining and we denote this relationship by writing .  We now show that if , then the function defined above is an isomorphism between and . To see this, note that for and in we can apply to obtain the equalities Since , this shows us that in if and only if in  . We conclude that for every ideal on there is an ideal on such that is Tukey equivalent to , and vice versa.     The two preceding examples capture an important point: in many situations  The following lemma is the first place where we really need to assume that we are working with directed sets.    If and are directed sets, then the following are equivalent:     and are Tukey equivalent.    There is a Galois-Tukey connection from to such that is a Galois-Tukey connection from to . In particular,         Proof. The implication from (2) to (1) follows from the preceding lemma, so assume . Let witness and let witness . This means   Now we use the directedness of and to define and , choosing so that it bounds both and , and defining in the analogous fashion from and . This works, as given and , we our definitions imply and Thus, witnesses while shows us . ◻     Cofinal Similarity  The preceding lemma will be the key ingredient of a lovely result of Tukey that lays out the practical meaning of in exact terms. With this goal in mind, we make the following definition.    Let and be directed quasi-ordered sets.    A pair of mappings is said to be a Galois-Tukey equivalence between and if it satisfies (2) of the preceding lemma.     and are cofinally similar if there is a partially ordered set into which both and (or rather, the partial ordered sets obtained from the respective quasi-orders) can be embedded as cofinal subsets.      Now for the promised theorem that yields a convenient characterization of Tukey equivalence.    If and are directed sets, then if and only if and are cofinally similar.     Showing that Tukey equivalence follows from cofinal similarity is trivial, so we show the other direction. Let be a Galois-Tukey equivalence between and . We can assume without generality that and are disjoint, and we will first define a quasi-order on the set . We start in the obvious way by letting agree with on and on . For comparisons between elements of and of , we define We need to verify that is transitive, so let us assume and in . The verification of involves breaking into cases depending on where , , and sit in . We do only a couple of representative examples leaving the rest of the details as an exercise.  Assume first that and are in but is in . By definition, there is an such that and , and this also certifies the relation . In the situation where both and are in but is an element of , there are and such that We know because , and so we can conclude as required. The remaining cases needed to establish the transitivity of are left to Exercise  , but proceed in a similar manner.  The quasi-order induces an equivalence relation on , and a corresponding partial order (which we also denote by  ) on the set of equivalence classes. It is straightforward to see that the mapping sending to its corresponding equivalence class embeds and as cofinal subsets of the partially-ordered set . ◻   There is a well-developed literature associated with the notion of cofinal similarity of directed sets. The above theorem shows us that it is an equivalence relation, and in the literature the equivalence classes under cofinal similarity are called cofinal types .  We will shortly look at these notions in the contexts of products in , but first we prove a lemma that provides us with a tool for easily constructing Galois-Tukey equivalences. We won’t need the full generality of this result for our short term goals, but these ideas will resurface later in our study.    Suppose and are directed quasi-orders. If and are order-preserving functions such that both and hold, then the pair is a Galois-Tukey equivalence between and that moreover satisfies satisfies the following stronger property:      It is clear that implies both and  , so we aim for this stronger property. Our assumptions make this an easy computation, as illustrated by the inequalities and  ◻    "
},
{
  "id": "def-tukey-function",
  "level": "2",
  "url": "sec-1-5-tukey.html#def-tukey-function",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  Suppose and are quasi-ordered sets.    A map is a Tukey function if maps unbounded subsets of to unbounded subsets of .    A map is a convergent function if maps cofinal subsets of to cofinal subsets of .    We say is Tukey-reducible to (equivalent, is a Tukey quotient of if there is Tukey function mapping to , and we write this as .    If both and hold then we say and are Tukey equivalent , and we write this as .    A Galois-Tukey connection from to is a pair of functions such that , , and      "
},
{
  "id": "lem-tukey-map-char",
  "level": "2",
  "url": "sec-1-5-tukey.html#lem-tukey-map-char",
  "type": "Lemma",
  "number": "1.5.2",
  "title": "",
  "body": "  The following statements are equivalent for quasi-ordered sets and :     , that is, there is a Tukey function from to .    There is a convergent function mapping to .    There is a Galois-Tukey connection from to .     "
},
{
  "id": "galois-tukey-connections-5",
  "level": "2",
  "url": "sec-1-5-tukey.html#galois-tukey-connections-5",
  "type": "Proof",
  "number": "1.5.1.1",
  "title": "",
  "body": "  Proof. Suppose first that is a Tukey function. Then for each , the set of must be bounded in , so we can define a function by choosing to bound this set in . We leave the proof that maps cofinal subsets of to cofinal subsets of as an exercise.  Next, suppose maps cofinal sets to cofinal sets. Given , we can let be some element of with the property that This is possible because by our assumption on , the set of for which is not cofinal in , and so such a choice for must exist. Thus, the pair is a Galois-Tukey connection from to .  Now assume and are functions satisfying . It suffices to note that is a Tukey function: if is a subset of whose image under is bounded by some , then shows us that bounds in . Note that the function is also convergent by a similar argument, left to Exercise   ◻  "
},
{
  "id": "cor-preserve-card",
  "level": "2",
  "url": "sec-1-5-tukey.html#cor-preserve-card",
  "type": "Corollary",
  "number": "1.5.3",
  "title": "",
  "body": "  Suppose and are quasi-ordered sets with . Then and .   "
},
{
  "id": "galois-tukey-connections-8",
  "level": "2",
  "url": "sec-1-5-tukey.html#galois-tukey-connections-8",
  "type": "Proof",
  "number": "1.5.1.2",
  "title": "",
  "body": " Fix a Tukey and a convergent . Then the image under of an unbounded subset of of minimal cardinality shows us that is at most , and a similar argument using shows us that has a cofinal subset of cardinality at most . ◻  "
},
{
  "id": "cor-tukey-equiv-cofinal-subset",
  "level": "2",
  "url": "sec-1-5-tukey.html#cor-tukey-equiv-cofinal-subset",
  "type": "Corollary",
  "number": "1.5.4",
  "title": "",
  "body": "  Suppose is a quasi-ordered set. Then is Tukey-equivalent to any of its cofinal subsets.   "
},
{
  "id": "galois-tukey-connections-12",
  "level": "2",
  "url": "sec-1-5-tukey.html#galois-tukey-connections-12",
  "type": "Proof",
  "number": "1.5.1.3",
  "title": "",
  "body": " Suppose is a cofinal subset of . Any cofinal subset of will also be cofinal in , so the inclusion map corresponding to gives us a convergent function mapping to so . For the other direction, we let be some function that assigns to an arbitrary an element of such that (such a function exists as is cofinal in ). Suppose now that is cofinal in . Given we can find an with , and our definition of then tells us . Thus the image of under is a cofinal subset of , and so the convergent map establishes . ◻  "
},
{
  "id": "example-first-tukey",
  "level": "2",
  "url": "sec-1-5-tukey.html#example-first-tukey",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": " Suppose is such that is a limit ordinal for all , and for each let .  If we let denote then is an -indexed sequence of regular cardinals.  For each , we can choose a set cofinal in of order-type , and it is clear that the products and are order-isomorphic through the obvious correspondence.  Since is cofinal in , it follows that is Tukey equivalent to the product .  Moreover, this situation persists if we move from to a for some ideal on : it is still the case that is order-isomorphic to a cofinal subset of and hence these two structures are Tukey equivalent.  "
},
{
  "id": "example-second-tukey",
  "level": "2",
  "url": "sec-1-5-tukey.html#example-second-tukey",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": " Continuing with the notation of Example  , let us now make the additional assumption that the cardinality of is strictly less than each and then define to be the range of (considered as a function from onto ). Our aim is to show that and are essentially the same, in the sense that for any ideal on there is a corresponding ideal on such that and are Tukey equivalent, and vice versa.  We define to be the set of functions in that are constant on the pre-images of elements of under . Thus, a function in gets into if its value at depends only on the value . Our assumption that is less than is used to show that is cofinal in : Given we define by setting It is clear that , and implies , so will be in provided we can show is in . But this is where are assumption comes to the rescue, as in each coordinate the set will be bounded below . The structure is isomorphic to in a natural way as well, for given define through the formula Thus, and are Tukey equivalent by way of Corollary  .  Much more can be said, though, as the function induces a natural correspondence between ideals on and ideals on : given an ideal on (respectively, on ) then we get another ideal on (respectively, on ) by defining and we denote this relationship by writing .  We now show that if , then the function defined above is an isomorphism between and . To see this, note that for and in we can apply to obtain the equalities Since , this shows us that in if and only if in  . We conclude that for every ideal on there is an ideal on such that is Tukey equivalent to , and vice versa.    "
},
{
  "id": "lem-tukey-equivalence-char",
  "level": "2",
  "url": "sec-1-5-tukey.html#lem-tukey-equivalence-char",
  "type": "Lemma",
  "number": "1.5.7",
  "title": "",
  "body": "  If and are directed sets, then the following are equivalent:     and are Tukey equivalent.    There is a Galois-Tukey connection from to such that is a Galois-Tukey connection from to . In particular,      "
},
{
  "id": "galois-tukey-connections-20",
  "level": "2",
  "url": "sec-1-5-tukey.html#galois-tukey-connections-20",
  "type": "Proof",
  "number": "1.5.1.4",
  "title": "",
  "body": "  Proof. The implication from (2) to (1) follows from the preceding lemma, so assume . Let witness and let witness . This means   Now we use the directedness of and to define and , choosing so that it bounds both and , and defining in the analogous fashion from and . This works, as given and , we our definitions imply and Thus, witnesses while shows us . ◻  "
},
{
  "id": "def-cofinal-similarity",
  "level": "2",
  "url": "sec-1-5-tukey.html#def-cofinal-similarity",
  "type": "Definition",
  "number": "1.5.8",
  "title": "",
  "body": "  Let and be directed quasi-ordered sets.    A pair of mappings is said to be a Galois-Tukey equivalence between and if it satisfies (2) of the preceding lemma.     and are cofinally similar if there is a partially ordered set into which both and (or rather, the partial ordered sets obtained from the respective quasi-orders) can be embedded as cofinal subsets.     "
},
{
  "id": "thm-cofinal-similarity-equivalence",
  "level": "2",
  "url": "sec-1-5-tukey.html#thm-cofinal-similarity-equivalence",
  "type": "Theorem",
  "number": "1.5.9",
  "title": "",
  "body": "  If and are directed sets, then if and only if and are cofinally similar.   "
},
{
  "id": "cofinal-similarity-6",
  "level": "2",
  "url": "sec-1-5-tukey.html#cofinal-similarity-6",
  "type": "Proof",
  "number": "1.5.2.1",
  "title": "",
  "body": " Showing that Tukey equivalence follows from cofinal similarity is trivial, so we show the other direction. Let be a Galois-Tukey equivalence between and . We can assume without generality that and are disjoint, and we will first define a quasi-order on the set . We start in the obvious way by letting agree with on and on . For comparisons between elements of and of , we define We need to verify that is transitive, so let us assume and in . The verification of involves breaking into cases depending on where , , and sit in . We do only a couple of representative examples leaving the rest of the details as an exercise.  Assume first that and are in but is in . By definition, there is an such that and , and this also certifies the relation . In the situation where both and are in but is an element of , there are and such that We know because , and so we can conclude as required. The remaining cases needed to establish the transitivity of are left to Exercise  , but proceed in a similar manner.  The quasi-order induces an equivalence relation on , and a corresponding partial order (which we also denote by  ) on the set of equivalence classes. It is straightforward to see that the mapping sending to its corresponding equivalence class embeds and as cofinal subsets of the partially-ordered set . ◻  "
},
{
  "id": "lem-stronger-tukey-equivalence",
  "level": "2",
  "url": "sec-1-5-tukey.html#lem-stronger-tukey-equivalence",
  "type": "Lemma",
  "number": "1.5.10",
  "title": "",
  "body": "  Suppose and are directed quasi-orders. If and are order-preserving functions such that both and hold, then the pair is a Galois-Tukey equivalence between and that moreover satisfies satisfies the following stronger property:    "
},
{
  "id": "cofinal-similarity-10",
  "level": "2",
  "url": "sec-1-5-tukey.html#cofinal-similarity-10",
  "type": "Proof",
  "number": "1.5.2.2",
  "title": "",
  "body": " It is clear that implies both and  , so we aim for this stronger property. Our assumptions make this an easy computation, as illustrated by the inequalities and  ◻  "
},
{
  "id": "sec-2-1-types-of-upper-bounds",
  "level": "1",
  "url": "sec-2-1-types-of-upper-bounds.html",
  "type": "Section",
  "number": "2.1",
  "title": "Types of Upper Bounds",
  "body": " Types of Upper Bounds   Basic Definitions  We start our project by looking at how exact upper bounds compare to other natural candidates for being a smallest upper bound modulo for a collection of functions . We gather a few of these possibilities in the next definition.    Suppose is a set of functions, and is an upper bound for modulo  .    We say is a minimal upper bound for if implies that is not a -upper bound for .    We say is a least upper bound for if whenever is a -upper bound for . We say that is a lub for modulo  .    ( ) We say is an exact upper bound for if for any there is an with . We say that is an eub for modulo .      Note that these three conditions all coincide when is a maximal proper ideal on  , and it should be clear that a least upper bound for modulo  is also a minimal upper bound. In the circumstances of most interest to us, an exact upper bound will also be a least upper bound, as shown by the following claim.    If is non-empty and -directed, then an exact upper bound for modulo is also a least upper bound for modulo  .     Suppose that is an exact upper bound for modulo  , and is any other upper bound. We need to show holds.  By replacing with if necessary, we may assume that . Now suppose that , so that there is an -positive set of with . Let be the function in that agrees with at any for which is less than , and which takes on the value otherwise. Since we assumed that is -directed, it follows that must be non-zero almost everywhere and therefore . Since is an exact upper bound for , this means there must be an such that , and since is -directed, we may assume that .  Now we have a problem. On one hand, we know for almost every , and we know for almost every (as is an upper bound for ). On the other hand, on an -positive set by our construction. Thus, there must be an for which , and this is a contradiction. ◻   Some assumption like the above is necessary to conclude that an exact upper bound is a least upper bound: see Exercise  below. These varieties of upper bounds do, however, all interact with the equivalence relations and in the way we might wish.    Suppose is an ideal on the set , and let and be subsets of with . If and are functions with , then     is an upper bound for modulo if and only if is an upper bound for modulo ,     is a minimal bound of modulo if and only if is a minimal bound of modulo ,     is a least upper bound for modulo if and only if is a least upper bound for modulo , and     is an exact upper bound for modulo if and only if is an exact upper bound for modulo .      Sometimes it is helpful to view these concepts in their contrapositive formulations. If is a minimal upper bound for modulo , then any function that is almost everywhere strictly less than will fail to bound . If is a least upper bound for modulo , then any function that is strictly less than on an -positive set will fail to bound . Finally, any function that is almost everywhere strictly less than an exact upper bound is actually bounded by some member of modulo . In a similar vein, we can characterize the concepts from for by the way in which sits inside of .    Suppose is a set, , is a proper ideal on , and .     is a -minimal upper bound for if and only if is unbounded in .     is a least upper bound for if and only if is everywhere unbounded in , that is is unbounded modulo for any -positive subset of .     is an exact upper bound for if and only if is cofinal in .    If in addition is -directed, then is an exact upper bound for if and only if is unbounded in for any proper ideal on extending  .        Proof. Statement (1) and (3) are very easy, and follow directly from the corresponding definitions. For (2), suppose first that there is an -positive and a function such that bounds modulo the ideal . Define a function with domain by The function is an upper bound for modulo , and since it follows that is not a least upper bound for .  If on the other hand is not a least upper bound for , then there will be a witnessing function , and we can take The set is -positive (as and are not equal modulo ), and bounds modulo .  As for (4), note that if is -cofinal in then this will remain true in for any ideal on that extends . If is NOT -cofinal in then this will be witnessed by a function such that is not bounded by any . Let be the ideal on generated by together with the sets for . It is clear that will be -bounded by , so we finish if we show that is in fact a proper ideal.  Suppose by way of contradiction that this fails. This means that there are finitely many functions in and a set such that Translating this into quantifiers, what we have is a function such that We have assumed that is -directed, so there is a single such that for all . But then implies that and this contradicts the choice of  . Thus is a proper ideal on , and witnesses that is -bounded in  . ◻     Let be a -increasing sequence of functions.    If has a least upper bound, then it is unique modulo .    If has a least upper bound modulo that is not exact, then there is a function for which the -increasing sequence of subsets of defined by letting does not stabilize modulo .       Clause (1) is easy, as if and are upper bounds for then so is the function . Suppose now that is a least upper bound for that is not exact. This means that fails to be cofinal in , and so there is a function that witnesses this. We claim now that has the required properties. It is obvious that sequence will be -increasing because is -increasing. Moreover, for each both and its complement must be -positive: does not bound modulo , nor does bound . If the sequence of sets were to eventually stabilize modulo , say for all sufficiently large , then we have a contradiction of part (2) of because is bounded by on . ◻   The following corollary follows from (2) above by an easy argument which we relegate to an exercise.    If has a least upper bound that is not exact, then there is a family of -positive sets such that for distinct and less than .      Examples  We finish this section with a few examples chosen to illustrate the definitions we have been investigating.   Let and let be the ideal of finite subsets of . For each let be constant with value , and let . If is any -upper bound for in , the function defined by is another upper bound for with . Even though is -bounded in , it does not have a minimal upper bound.      Continuing with and as in the previous example, let be constant with value for each . We claim that is an exact upper bound for modulo  . Suppose , so for all sufficiently large . Since , there is a single such that for all sufficiently large , hence as required.      Let , and for each let be the function that is constant with value for . Let , and let be the identity function on . What occurs modulo the ideal of bounded subsets of  ? The function is a minimal upper bound for because any function is bounded on a stationary (hence uncountable) set. On the other hand is not a least upper bound bound for : if is the collection of countable successor ordinals, then the function defined by sits below on an -positive set, but is still an upper bound for modulo  .      What occurs in the previous example if we enlarge to be the non-stationary ideal on  ? The function is now a least upper bound for because of the normality of : any function that is less than on an -positive set is constant on an -positive set and therefore cannot be an upper bound for modulo . On the other hand, is not an exact upper bound for . To see this, let partition into disjoint stationary sets, and let . Then each set is stationary, and we have arranged . Now define a function with domain by setting The function is in (as for all ) but there is no such that .      "
},
{
  "id": "def-three-bounds",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#def-three-bounds",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  Suppose is a set of functions, and is an upper bound for modulo  .    We say is a minimal upper bound for if implies that is not a -upper bound for .    We say is a least upper bound for if whenever is a -upper bound for . We say that is a lub for modulo  .    ( ) We say is an exact upper bound for if for any there is an with . We say that is an eub for modulo .     "
},
{
  "id": "prop-eub-vs-lub",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#prop-eub-vs-lub",
  "type": "Proposition",
  "number": "2.1.2",
  "title": "",
  "body": "  If is non-empty and -directed, then an exact upper bound for modulo is also a least upper bound for modulo  .   "
},
{
  "id": "basic-definitions-6",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#basic-definitions-6",
  "type": "Proof",
  "number": "2.1.1.1",
  "title": "",
  "body": " Suppose that is an exact upper bound for modulo  , and is any other upper bound. We need to show holds.  By replacing with if necessary, we may assume that . Now suppose that , so that there is an -positive set of with . Let be the function in that agrees with at any for which is less than , and which takes on the value otherwise. Since we assumed that is -directed, it follows that must be non-zero almost everywhere and therefore . Since is an exact upper bound for , this means there must be an such that , and since is -directed, we may assume that .  Now we have a problem. On one hand, we know for almost every , and we know for almost every (as is an upper bound for ). On the other hand, on an -positive set by our construction. Thus, there must be an for which , and this is a contradiction. ◻  "
},
{
  "id": "prop-bounds-interact",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#prop-bounds-interact",
  "type": "Proposition",
  "number": "2.1.3",
  "title": "",
  "body": "  Suppose is an ideal on the set , and let and be subsets of with . If and are functions with , then     is an upper bound for modulo if and only if is an upper bound for modulo ,     is a minimal bound of modulo if and only if is a minimal bound of modulo ,     is a least upper bound for modulo if and only if is a least upper bound for modulo , and     is an exact upper bound for modulo if and only if is an exact upper bound for modulo .     "
},
{
  "id": "thm-three-characterizations",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#thm-three-characterizations",
  "type": "Theorem",
  "number": "2.1.4",
  "title": "",
  "body": "  Suppose is a set, , is a proper ideal on , and .     is a -minimal upper bound for if and only if is unbounded in .     is a least upper bound for if and only if is everywhere unbounded in , that is is unbounded modulo for any -positive subset of .     is an exact upper bound for if and only if is cofinal in .    If in addition is -directed, then is an exact upper bound for if and only if is unbounded in for any proper ideal on extending  .     "
},
{
  "id": "basic-definitions-11",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#basic-definitions-11",
  "type": "Proof",
  "number": "2.1.1.2",
  "title": "",
  "body": "  Proof. Statement (1) and (3) are very easy, and follow directly from the corresponding definitions. For (2), suppose first that there is an -positive and a function such that bounds modulo the ideal . Define a function with domain by The function is an upper bound for modulo , and since it follows that is not a least upper bound for .  If on the other hand is not a least upper bound for , then there will be a witnessing function , and we can take The set is -positive (as and are not equal modulo ), and bounds modulo .  As for (4), note that if is -cofinal in then this will remain true in for any ideal on that extends . If is NOT -cofinal in then this will be witnessed by a function such that is not bounded by any . Let be the ideal on generated by together with the sets for . It is clear that will be -bounded by , so we finish if we show that is in fact a proper ideal.  Suppose by way of contradiction that this fails. This means that there are finitely many functions in and a set such that Translating this into quantifiers, what we have is a function such that We have assumed that is -directed, so there is a single such that for all . But then implies that and this contradicts the choice of  . Thus is a proper ideal on , and witnesses that is -bounded in  . ◻  "
},
{
  "id": "prop-uniqueness-and-ugly",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#prop-uniqueness-and-ugly",
  "type": "Proposition",
  "number": "2.1.5",
  "title": "",
  "body": "  Let be a -increasing sequence of functions.    If has a least upper bound, then it is unique modulo .    If has a least upper bound modulo that is not exact, then there is a function for which the -increasing sequence of subsets of defined by letting does not stabilize modulo .     "
},
{
  "id": "basic-definitions-13",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#basic-definitions-13",
  "type": "Proof",
  "number": "2.1.1.3",
  "title": "",
  "body": " Clause (1) is easy, as if and are upper bounds for then so is the function . Suppose now that is a least upper bound for that is not exact. This means that fails to be cofinal in , and so there is a function that witnesses this. We claim now that has the required properties. It is obvious that sequence will be -increasing because is -increasing. Moreover, for each both and its complement must be -positive: does not bound modulo , nor does bound . If the sequence of sets were to eventually stabilize modulo , say for all sufficiently large , then we have a contradiction of part (2) of because is bounded by on . ◻  "
},
{
  "id": "cor-ugly",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#cor-ugly",
  "type": "Corollary",
  "number": "2.1.6",
  "title": "",
  "body": "  If has a least upper bound that is not exact, then there is a family of -positive sets such that for distinct and less than .   "
},
{
  "id": "examples-3",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#examples-3",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " Let and let be the ideal of finite subsets of . For each let be constant with value , and let . If is any -upper bound for in , the function defined by is another upper bound for with . Even though is -bounded in , it does not have a minimal upper bound.    "
},
{
  "id": "examples-4",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#examples-4",
  "type": "Example",
  "number": "2.1.8",
  "title": "",
  "body": " Continuing with and as in the previous example, let be constant with value for each . We claim that is an exact upper bound for modulo  . Suppose , so for all sufficiently large . Since , there is a single such that for all sufficiently large , hence as required.    "
},
{
  "id": "examples-5",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#examples-5",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": " Let , and for each let be the function that is constant with value for . Let , and let be the identity function on . What occurs modulo the ideal of bounded subsets of  ? The function is a minimal upper bound for because any function is bounded on a stationary (hence uncountable) set. On the other hand is not a least upper bound bound for : if is the collection of countable successor ordinals, then the function defined by sits below on an -positive set, but is still an upper bound for modulo  .    "
},
{
  "id": "examples-6",
  "level": "2",
  "url": "sec-2-1-types-of-upper-bounds.html#examples-6",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": " What occurs in the previous example if we enlarge to be the non-stationary ideal on  ? The function is now a least upper bound for because of the normality of : any function that is less than on an -positive set is constant on an -positive set and therefore cannot be an upper bound for modulo . On the other hand, is not an exact upper bound for . To see this, let partition into disjoint stationary sets, and let . Then each set is stationary, and we have arranged . Now define a function with domain by setting The function is in (as for all ) but there is no such that .    "
},
{
  "id": "sec-2-2-flat-sequences",
  "level": "1",
  "url": "sec-2-2-flat-sequences.html",
  "type": "Section",
  "number": "2.2",
  "title": "Flat Products and Sequences",
  "body": " Flat Products and Sequences  This section begins with an expansion of Example  , as the existence of an exact upper bound in that situation is a general phenomenon that crops up in many places.   Suppose is an infinite set and is a regular cardinal with . If is a -increasing sequence in , then the pointwise supremum of the functions is an exact upper bound for modulo any proper ideal on . To see this, let be the corresponding supremum, that is, . Let be any function in . For each , we define to be least for which . Clearly will exist, as the sequence is strictly increasing with supremum . Since , we know the supremum of the ordinals (for ) is some ordinal strictly less than , and therefore will be less than for all . Since is bounded everywhere by , it is clear that for any proper ideal on , and therefore is an exact upper bound for mod .    The point is that the pointwise supremum of a sufficiently long (that is, of length strictly greater than the cardinality of  ) -increasing sequence will be an exact upper bound of the sequence for reasons of elementary cardinal arithmetic. Turning this around, it is easy to characterize when a function will be an exact upper bound for such a -increasing sequence.   Suppose is an infinite set and is a regular cardinal greater than . If and for all , then will have true cofinality .    Proof. For each let be the increasing enumeration of a cofinal subset of . Then for each , we can define and the sequence is -increasing. Since is the pointwise supremum of this sequence, we are in the situation of Example  . Thus, is an exact upper bound for and has true cofinality . ◻  Of course, it is sufficient to demand only that the cofinality of should be for -almost all , as such a function is equal modulo to one that has the required cofinality everywhere. The following proposition wraps Proposition  and Example  together, along with a couple of other easy equivalences.   Suppose is a regular cardinal with . Then the following are equivalent for a function .     for all .     contains a -increasing sequence and .     .     for every (proper) ideal on .      Proof. The implication from (1) to (2) holds using , and does not require to be greater than . Moving from (2) to (3) is done as in Example  , and (4) follows from (3) by definition. If (1) fails, then it fails for some specific , and if we let be the principle ideal then will be . ◻  If start with an ideal and weaken condition (1) to require only that has cofinality for -almost all , then we lose (2) and (3) in the above equivalence, but (4) remains equivalent if we require that the condition holds for all proper ideals on that extend . Of course, every such is equal (modulo  ) to a function that attains cofinality in every coordinate. This configuration arises enough that it makes sense to assign some terminology.   Let be a set and let be a regular cardinal.    A function is said to be flat of cofinality if for -almost all .    The product associated with such a function is called a flat product with cofinality .    A set of functions in is flat of cofinality modulo if has an exact upper bound that is flat of cofinality .    Our aim is to give an internal characterization of flat sets of functions, at least in the case where . We do this in Theorem  below, but before stating and proving the theorem we will engage in a bit of exploration. Suppose that is flat of cofinality modulo with , and let be a corresponding flat exact upper bound for . We may assume that for all , so we can also fix for each and unbounded of order-type . The work we did in Example  and Proposition  shows us that is equivalent modulo  to the product , and also equivalent modulo  to a -increasing sequence . This turns out to be a powerful assumption, as it implies the pointwise supremum of fewer than functions in is bounded modulo in : Given with , we choose for each a corresponding ordinal with . Since is regular, we know that the supremum over all of the ordinals will be less than , and hence is everywhere bounded by for some . Now we can choose for which . Looking back to notation established in the last chapter, we have shown that is at least . This observation is one of the important ingredients in our internal characterization of flatness.   Suppose with regular. Then the following statements are equivalent for a family of functions and ideal on :     is flat of cofinality modulo  .     .     has a cofinal subset of cardinality such that for all .     is -directed and equivalent modulo to a -increasing sequence of length .     is equivalent modulo to a -increasing sequence of length .     is equivalent modulo to a product where has order-type .      Proof. If is flat of cofinality , then by our discussion above we know is at least . Since has true cofinality , we can invoke Theorem I. and conclude If we assume (2), then (3) follows from the proof of Theorem I. . Since we fix a cofinal family in and build by induction, making sure at stage to select so that   Clearly (3) implies that is -directed. If we define then is -increasing and equivalent to .  How would we establish (4) from the existence of such a sequence ? Given , look at the sequence . This is non-decreasing by our assumption on and nothing in our assumptions prevents the sequence from stabilizing. However, our assumptions DO imply that this cannot happen very often: the set of for which the sequence of values eventually stabilizes must be in .  To see this, suppose it fails and the set of for which the corresponding sequence stabilizes is -positive. Since and is regular, there will be a with the property all of these sequences will have stabilized before stage . Thus, if and we know and hence . But now we have a problem: since is -directed and equivalent to so we can find an greater than such that for -almost all in . Thus, the set must be in .  Given , if is not in then there will be some ordinal greater than for which . We can use the fact that once more to conclude and now (5) follows easily. The implications from (5) to (6) and from (6) to (1) have been established earlier in this section. ◻  We end this section by pointing out how the preceding theorem clarifies the relationship between simply having true cofinality  modulo  and being flat of cofinality modulo  . Given a directed structure we know in all cases, while the structure has true cofinality if and only if The structure will be flat of cofinality if and only if we have the stronger condition Thus, flatness of a set of functions can be characterized solely in terms of cardinal characteristics  "
},
{
  "id": "sec-2-3-exactsequences",
  "level": "1",
  "url": "sec-2-3-exactsequences.html",
  "type": "Section",
  "number": "2.3",
  "title": "Global Structure of Exact Sequences",
  "body": " Global Structure of Exact Sequences  Now that we can claim to understand the structure of flat families of functions, we move now to the more general problem of characterizing when a -increasing sequence of functions has an exact upper bound that need not be flat.    A -increasing sequence in is called exact of cofinality if the sequence has an exact upper bound and .    Notice that any -increasing sequence of limit length has a cofinal subsequence of length , and hence we will usually restrict our attention to increasing sequences with length a regular cardinal. If we need further generality, we will follow the practice established in the last section and say that a -increasing sequence of length some limit ordinal is exact if it has an exact upper bound, and then the original sequence will be equivalent modulo  to an exact sequence of length .  As far as eubs go, there are some things we can say about their structure without knowing much about the sequence at all. For example, the following relies only on the fact that the length of the sequence is an infinite cardinal.    Suppose is an exact sequence of length , and let be an exact upper bound. Then is an infinite limit ordinal for -almost all .     It is obvious that cannot equal 0 on an -positive set: just the fact that is enough to guarantee that must be greater than for almost all , and hence the same must hold for .  Next, suppose by way of contradiction that there is an -positive set of coordinates for which is a successor ordinal. Define a function with domain by Since , we can choose with . If is in and , then it must be the case that is less than or equal to . Thus, there is an -positive set of for which . But this is absurd as we know . ◻   The preceding proposition allows us to invoke when discussing exact sequences and assume without loss of generality that the exact upper bounds have the form , where each is a regular cardinal. Moreover, if we know that is greater than for -almost every coordinate , then by the argument of  is equivalent modulo to an isomorphic copy of the product .   Suppose is a -exact sequence of length with exact upper bound  .    If the sequence is constant with some value on an -positive set, then either or .     for -almost all .      Proof. It suffices to show that if is a regular cardinal with and , then . To do this, assume is a regular cardinal greater than and there is an -positive set on which is constant with value . If we let be the ideal , then is will be (modulo ) flat of cofinality . Since extends and is exact of length modulo , we conclude that must equal .  For the second part of the theorem, assume by way of contradiction that there is an -positive set such that for all . Since each is a regular cardinal, we know that for in , the set is bounded below . Thus, we can define a function by setting to be outside of , while for all and , is less than We get a contradiction, as there must be a for which , but for an -positive set of . ◻  The preceding theorem foreshadows a connection between the structure of an exact sequence and the nature of its exact upper bound . To see how, let us first focus on the situation where the regular cardinals in the upper bound are (almost) all greater than the cardinality of . In this situation, we know that must be greater than as well, and if our sequence is constant with value on an -positive set, then the only possibility is for to be , the length of . Let be the set of for which and set . It is certainly possible for either of these sets to be empty, but we know that since they partition into finitely many pieces, at least one of them must be -positive. If is in the ideal , then our sequence is flat of cofinality . If is in the ideal , then for any -positive set the sequence is not flat modulo . Even if both and are in , we still have shown that assuming that for all , our index set will into two pieces: on one of which looks flat of cofinality  modulo , and on the other where is nowhere flat modulo .  What happens we don’t assume that is always greater than ? First, note that since need not be maximal, there is nothing preventing the situation where the sequence is constant with different values on disjoint -positive sets. So for example, we could have an -positive set on which our sequence looks flat of cofinality , and there could be another -positive set where is constant with some value . What we do know is that if the latter situation occurs, then , so there is an -positive set on which lives in a small product . Here, in contrast to the flat situation, things can be very sensitive to the underlying set theory, even in the simplest situation where both and are .   Suppose is an arbitrary uncountable regular cardinal. Let be a model of in which and holds. Let , the Baire space of all functions from to , and let be the ideal of finite subsets of . Martin’s Axiom implies that the cardinals and are equal to the continuum, and so will have true cofinality  . Any sequence witnessing this will have the function that is constant with value as exact upper bound. Thus, the exact upper bound does not seem to be connected with the sequence in this situation.  If we do not insist on our examples involving and instead allow larger ideals, then we can have (at least consistently) even worse behavior as the following example shows.   It is consistent that is arbitrarily large, and for any uncountable regular there is an ideal on such that has true cofinality modulo . Again, the exact upper bound is exactly the same across all relevant — is always the function with domain that is constant with value — but the lengths of the exact sequences in realize all possibilities by varying the ideals involved.  As interesting as products of small sets are, they are not particularly useful for us because imposes few restrictions on how they behave, and we officially adopt the attitude that products of sets of size at most are intractable. If our exact sequence has an exact upper bound such that on an -positive set, then we will not be able to say much about the structure without adopting additional set-theoretic axioms because it hides a copy of a product of small sets within. Thus, the following definition is quite natural.   Suppose is a sequence of regular cardinals. We define to be the least cardinal such that there is an -positive set of with .  The preceding definition is made without assuming anything about the product  having true cofinality modulo  , and so it makes sense for any sequence of regular cardinals. It gives us some handy language as well: if is not greater than , then we know there is an -positive set of coordinates on which our product looks like a product of small sets, and we have declared such things to be taboo. Thus, we will want to focus our attention on products for which is greater than . Our intent is to look at this cardinal in the context of general products of regular cardinals , and then return to questions related to exact sequences a little later.  We will start with some elementary observations, so let us assume is an -indexed sequence of regular cardinals. First, Definition  will always make sense because is a proper ideal, and This shows us that the easiest way to guarantee that is greater than is to insist that each is greater than , and we will see this hypothesis come to the forefront as we move deeper into pcf theory.  Second, it is elementary to prove that must be in the closure of the set . This is quite useful, because it implies that if each is greater than and does not stabilize on an -positive set, then must be singular of cofinality at most (see Exercise  ).  Finally, Definition  extracts a cardinal characteristic from the sequence , without looking at the associated product . This is a shortcoming, as it would be useful to know that this particular cardinal could be recovered from the product itself as that would give us a means of looking at a collection of functions and determining if it is hiding an intractable product of small sets. Luckily, it happens that it is tightly connected to the cardinal  , which is defined from the product.   Suppose is a sequence of regular cardinals. Then     , and    if then .      Proof. Let , and suppose is a subset of of some cardinality . Since the product is closed downward under , we need to show that the function is in the product modulo . Clearly for all , and whenever because each is regular. The choice of means that this holds for almost all , so is equal (modulo ) to some function in our product.  Now suppose . We need to produce a subset of our product of cardinality whose supremum is not in . But this is easy: For each with and we add a function to that has value on coordinate and is identically elsewhere. The cardinality of is at most , and for all with . But this is an -positive set, so is not in our product. ◻  As a corollary, we end up with the desired characterization of using the functions in the product , at least for the situation in which we will operate most of the time.   If is a sequence of regular cardinals each greater than , then   We can take the above observation and use it to obtain a nice counterpart to our characterization of flatness  as the relation .   Suppose is an -indexed sequence of regular cardinals each greater than and let be the product . Then the following statements are equivalent:     is regular.    There is an for which .     .      Proof. Let denote . We know is in the closure of the set of regular cardinals , and our assumption implies that is less than . If is regular, it cannot be a limit point of the range of , and therefore must be an element of this set and so (2) holds.  Now assume (2). The inequality holds automatically and by Corollary  , so it suffices to produce an unbounded subset of with cardinality . For each , define a function by The definition of tells us that (2) implies for an -positive set of coordinates , and so will have the value on an -positive set . Since , (2) also implies that is a regular cardinal greater than the cardinality of . Thus, the sequence is flat of cofinality modulo the (proper) ideal , and furthermore the pointwise supremum of the sequence will be an exact upper bound. By construction, the supremum is equal to on , so any function is below modulo . This means that there will be an such that for -almost all , and we conclude that set of functions is unbounded in modulo .  The final implication from (3) to (1) is easy given our prior work: we know will equal , and we finish by way of Proposition I. , which tells us that is a regular cardinal. ◻  We now come to an important corollary that tells us that singular cardinals are always hiding just around the corner in our work.   Suppose is an -indexed sequence of regular cardinals greater than and let denote the product .    If , then there is an -positive set on which is flat of cofinality .    If does not stabilize on an -positive set, then       Proof. The first follows from the equivalence of (2) and (3) in our theorem, and the second from the equivalence of (1) and (2) combined with earlier observations. ◻  The above corollary tells us where to look if we are interested in finding exact sequences that are nowhere flat but do not live in an intractable product of small sets: we are going to need to find products of regular cardinals satisfying (so there will be a true cofinality modulo ) for which the cardinal is singular and strictly less than (which must happen if we are to avoid an -positive set on which looks flat modulo ). The following gives us our first example of such an exact sequence, but it has the defect of making some cardinal arithmetic assumptions, a defect that will be removed later in this chapter when we show that such sequences are quite common.   Assume holds, and let be the product , where . If we let be the ideal of finite subsets of , then is -directed, and so We see that is , and therefore as well by Corollary  . Since is regular and at least of cardinality , we conclude that both and are and therefore has true cofinality modulo .  "
},
{
  "id": "def-exact-sequence",
  "level": "2",
  "url": "sec-2-3-exactsequences.html#def-exact-sequence",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A -increasing sequence in is called exact of cofinality if the sequence has an exact upper bound and .   "
},
{
  "id": "prop-basic-eub-prop",
  "level": "2",
  "url": "sec-2-3-exactsequences.html#prop-basic-eub-prop",
  "type": "Proposition",
  "number": "2.3.2",
  "title": "",
  "body": "  Suppose is an exact sequence of length , and let be an exact upper bound. Then is an infinite limit ordinal for -almost all .   "
},
{
  "id": "sec-2-3-exactsequences-7",
  "level": "2",
  "url": "sec-2-3-exactsequences.html#sec-2-3-exactsequences-7",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " It is obvious that cannot equal 0 on an -positive set: just the fact that is enough to guarantee that must be greater than for almost all , and hence the same must hold for .  Next, suppose by way of contradiction that there is an -positive set of coordinates for which is a successor ordinal. Define a function with domain by Since , we can choose with . If is in and , then it must be the case that is less than or equal to . Thus, there is an -positive set of for which . But this is absurd as we know . ◻  "
},
{
  "id": "sec-2-4-trichotomy",
  "level": "1",
  "url": "sec-2-4-trichotomy.html",
  "type": "Section",
  "number": "2.4",
  "title": "The Trichotomy Theorem",
  "body": " The Trichotomy Theorem  So far we have not been able to produce a example of a non-flat exact sequence. We take a big step towards this goal in this section, as we prove Shelah’s Trichotomy Theorem which shows that any -increasing sequence in whose length satisfies must fall into one of three categories. We will then show that ANY -increasing sequence with length of cofinality greater than will be exact. But first, we state the Trichotomy Theorem as it is found in the literature, and then spend a little time discussion the alternatives before presenting the proof.    Suppose is an ideal on the set , and is a regular cardinal greater than . If is an -increasing sequence of ordinal functions in , then satisfies one of the following conditions:    () has an eub with for all .    () There are sets for satisfying and an ultrafilter over extending the dual of so that for all there exists and such that .    () There is a function such that the -increasing sequence does not stabilize modulo , where is defined to be .    We have invested a great deal of time in discussing . As far as goes, we should recognize this as related to behavior we took great pains to avoid in the previous section: tells us that we can embed into a product of small sets modulo an ideal that extends , and we know products of small sets can exhibit all sorts of behavior. If happens, the sequence may or may not have an exact upper bound: products of small sets are intractable from our point of view.  It is really that appears to be to the new ingredient here, but we have actually seen this condition earlier. Looking back at part (2) of Proposition  , we see that is precisely the condition that arises if we find a -increasing sequence with an lub modulo  that fails to be exact. Said another way, if fails for a sequence modulo then any least upper bound for will be exact. We will use this observation as one ingredient in our proof of the Trichotomy, but the assumption that fails provides much deeper information about the way in which sits inside of . We will expand on this before proving the Trichotomy Theorem, because it makes the argument clearer and removes some of sense of deus ex machina from Shelah’s original proof.  Suppose now that is a -increasing sequence in and fails. This means that given a function , the corresponding -increasing sequence of sets stabilizes modulo . Thus, we can fix a subset of such that for all sufficiently large . If is in , then is in for all and is an upper bound for modulo . If, on the other hand, is equal to modulo , then for all sufficiently large and is bounded by modulo . If both and its complement are -positive, then the sets capture the way in which interacts with the sequence . On the set , is bounded modulo by some , while on the set the function is an upper bound for modulo . Thus, is bounded by modulo the ideal and bounds modulo the ideal . The point is that the interaction between and is captured by the partition of into the sets and , and situations where this fails to happen are .  We will round out this discussion of and its negation by re-proving the second part of Proposition  and showing that the failure of means least upper bounds are exact. Suppose then that is a least upper bound for the -increasing sequence and fails. Given a function in we need to show that there is an with . Since our sequence is not ugly, we can accomplish this by showing that the set (the eventual value of ) is equal to modulo , or equivalently, showing that the set is in . Let us define a function by putting equal to and equal to . This function is an upper bound for modulo , and since is a least upper bound we know . Since for , we conclude that is in and so is bounded by as required.    Proof of the Trichotomy Theorem. Let be a -increasing sequence whose length is a regular cardinal greater than . It suffices to prove that the failure of implies that either is or has a least upper bound modulo . If we manage to produce such a least upper bound, then the failure of implies it is exact, and if were less than or equal to on a -positive set, then any ultrafilter on containing this set and disjoint to would serve to establish .  By induction on we will attempt define a -decreasing sequence of upper bounds for . We will start with letting equal . Successor stages are also straightforward: Given we will ask if it is a least upper bound for . If the answer is yes, then we are finished. If the answer is no , then will be an upper bound for that satisfies , so is strictly less than on an -positive set of coordinates.  How do we proceed at limit ordinals? Suppose we have successfully defined the sequence through some limit stage . Our goal is to show that either a suitable can be found, or we can show that is . How might we do this? If we want to show that our sequence is , then we will need some sort of product of small sets to aim for. Our work so far provides a natural candidate: for each we can define to be the set . Since , the sets are of cardinality at most . For each we let be the upward projection of up into the product , defined by setting The sequence is -increasing in the product . Note as well that the definition implies for any and . This is because bounds modulo and for each . Thus, if there is an for which is an upper bound for our construction can continue by selecting this function as .  Since fails by assumption, we know that for each that there is a set such that for all sufficiently large , and so we can choose such that holds whenever .  We come now to a very important point: the sequence is -decreasing. This is easy to see: given we choose greater than , and the result follows from the definition because . The behavior of this -decreasing sequence is how we determine if our construction continues, or if we stall at stage because is .  There is an such that is in .  Looking back at the definition of , our case assumption implies that for all sufficiently large . Since is -increasing, it follows that is an upper bound for modulo , and as we have observed previously we can continue by setting .  Actually, though, we can say something stronger in this situation. If we know automatically. However, because in addition bounds modulo , it follows that for almost every we have and so as well. As soon as we hit an for which is in , the upward projections stabilize and we have for all sufficiently large .   is -positive for all .  In this situation, we have a -decreasing sequence of -positive sets and so there is an ultrafilter on disjoint to that contains each of the sets . Given we know by construction, and for all sufficiently large we can use to conclude that . Thus the sequence of functions in together with the ultrafilter witness that is and our construction halts.  To finish the proof, it suffices to show that our construction must halt at some stage prior to . We stop in one of two ways: either we come across a stage  for which is a least upper bound for , or we are able to establish that our sequence is through our work at some limit ordinal . Let us assume by way of contradiction that neither of these events occurs. If this is the case, then for each limit ordinal our construction lands in Case 1, and so there is an ordinal such that the associated set is in , and more importantly, such that for all .  Now at last we use our assumption that is greater than , as this allows us to find an such that for an unbounded set of limit ordinals . As we have noted, this means For each , our definitions imply that the sequence is -increasing, and therefore the corresponding sequence of upward projections is -decreasing. Since any -decreasing sequence of ordinals is eventually constant and , our sequence of functions is forced to stabilize at some point as well. Thus, there is a such that Now we have a problem, as the conjunction of and tell us that that stabilizes modulo but this is absurd as our construction guarantees that the sequence is -decreasing. Thus, our construction must end at some stage prior to , and therefore is either (if we stopped at a limit ordinal) or has a least upper bound (if we stopped at a successor ordinal). As we noted at the start of the proof, this is sufficient to establish the theorem. ◻  We close this section with a few remarks on the Trichotomy Theorem, the details of which are relegated to a few exercises. We start with a useful corollary of the Trichotomy Theorem that shows that any -increasing sequence whose length has sufficiently high cofinality will be exact.   A -increasing sequence with is exact.    Proof. See Exercise   ◻  This tells us that exact sequences are easy to find, and also provides us with examples of exact sequences that are far from being flat. We sketch such an example below, and leave the details to the exercises.   Let is a singular cardinal of countable cofinality with , and let be an increasing sequence of regular cardinals cofinal in with . Set and let be the ideal of finite subsets of . If we let , then is at least , and so contains -increasing sequences of length . Such a sequence is exact by Corollary  , and there is no -positive set on which it looks flat.   If is , then there is a family of  -positives sets whose pairwise intersections are in , that is, is not -saturated . This situation is impossible if is a maximal ideal, as -positive sets are just elements of the dual ultrafilter and ultrafilters are closed under finite intersections. This tells us that when is a maximal ideal on , the possibility in the Trichotomy cannot occur, and any -increasing sequence with must either be or .  Finally, the assumption is necessary and cannot be replaced by . This, however, is not that important for pcf theory, because we will typically be working with situations in which .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
