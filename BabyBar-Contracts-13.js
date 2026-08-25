const examData = [
    // FACT PATTERN 1 (Q1-Q2)
    {
        id: 1, 
        topic: "Formation / UCC 2-207 (Expressly Conditional Acceptance)",
        fp: "Merchant A emails an offer to buy 100 generators from Merchant B, stating: 'Delivery must be executed via rail freight.' Merchant B responds with a signed acknowledgment accepting the order, but adding: 'Delivery shall be executed strictly via commercial trucking.' B makes his acceptance expressly conditional on assent to the trucking term. A does not expressly assent but accepts the delivery when the truck arrives.",
        q: "What is the legal effect of B's response and A's acceptance of the goods under UCC § 2-207?",
        opts: [
            "B's form is a binding acceptance, but the trucking term is severed as a material alteration under subsection 2.",
            "A contract is formed entirely on A's original terms under the mirror image rule.",
            "No contract was ever formed, requiring the immediate restitution of the generators to B.",
            "B's form is a counteroffer; however, a contract was formed by the subsequent conduct of the parties, meaning the conflicting terms are knocked out and replaced by UCC gap-fillers."
        ],
        ans: 3, 
        exp: "Under UCC § 2-207(1), making an acceptance 'expressly conditional' on new terms transforms the response into a counteroffer, preventing the formation of a contract by the writings. However, under UCC § 2-207(3), when the parties proceed to perform anyway (shipping and accepting goods), a contract is formed by their conduct. The terms are those on which the writings agree, while conflicting terms (rail vs. trucking) knock each other out."
    },
    {
        id: 2,
        topic: "Defenses / Statute of Frauds (Merchant's Confirmatory Memo)",
        fp: "Merchant A and Merchant B verbally agree over the phone that A will purchase $5,000 worth of generators. The next day, A sends an email to B stating: 'Confirming our verbal agreement for $5,000 in generators.' B receives the email but notices it does not contain A's manual ink signature. B completely ignores it. Three weeks later, B refuses to deliver, citing the Statute of Frauds.",
        q: "Is the oral agreement enforceable against B?",
        opts: [
            "Yes, because under the merchant's confirmatory memo rule, an electronic communication identifying the sender satisfies the signature requirement, and B's failure to object within 10 days binds him.",
            "No, because the Statute of Frauds strictly mandates a formal, physical ink signature on commercial documents exceeding five hundred dollars.",
            "Yes, because phone negotiations inherently waive statutory formalities in wholesale commercial transactions.",
            "No, because the three-week delay rendered the initial confirmation legally moot."
        ],
        ans: 0,
        exp: "Under UCC § 2-201(2) (the merchant's confirmatory memo rule), if one merchant sends a written confirmation of the oral agreement within a reasonable time, it satisfies the Statute of Frauds against the recipient UNLESS the recipient objects in writing within 10 days. Electronic communications (emails) and typed names satisfy the 'writing' and 'signature' requirements under modern statutes (UETA/E-SIGN)."
    },
    // FACT PATTERN 2 (Q3-Q4)
    {
        id: 3,
        topic: "Performance / Frustration of Purpose",
        fp: "Astronomer rents a specialized rooftop observation deck from Owner for $10,000 specifically to view a rare comet passing overhead on a specific night. Both parties explicitly understand this is the sole purpose of the rental. The night of the event, a distant volcano erupts, creating a massive, unprecedented ash cloud that completely obscures the sky, making the comet totally invisible.",
        q: "Is Astronomer legally obligated to pay the $10,000 rental fee?",
        opts: [
            "Yes, because the physical venue remained fully accessible and structurally intact.",
            "No, under the doctrine of frustration of purpose, because an unforeseeable supervening event fundamentally destroyed the mutually understood core purpose of the contract.",
            "Yes, because atmospheric phenomena are generally considered an assumed risk in outdoor venue rentals.",
            "No, because the volcano eruption triggers absolute contractual impossibility."
        ],
        ans: 1,
        exp: "Frustration of purpose excuses performance when a supervening, unforeseeable event fundamentally destroys the mutually understood, core purpose of the contract, even if performance is still technically possible. The deck is still physically accessible (not impossible to use), but the ash cloud completely destroyed the sole purpose of renting it to view the comet."
    },
    {
        id: 4,
        topic: "Defenses / Mutual Mistake",
        fp: "Astronomer rents a specialized rooftop observation deck from Owner for $10,000 specifically to view a rare comet passing overhead on a specific night. Both parties explicitly understand this is the sole purpose of the rental. The night of the event, a distant volcano erupts, creating a massive, unprecedented ash cloud that completely obscures the sky, making the comet totally invisible.\n\nAssume instead that no volcano erupted. However, both Astronomer and Owner erroneously relied on a flawed astronomical chart; the comet had actually passed by the earth the month before they signed the contract.",
        q: "What doctrine provides Astronomer the best basis to void the agreement?",
        opts: [
            "Unilateral mistake.",
            "Promissory estoppel.",
            "Mutual mistake regarding a basic factual assumption existing at the time of contract formation that materially affected the agreed exchange.",
            "Anticipatory repudiation."
        ],
        ans: 2,
        exp: "A mutual mistake occurs when both parties are mistaken about a basic assumption of fact that exists AT THE TIME the contract is formed. Because the comet had already passed (a present, though unknown, fact), they made a mutual mistake regarding a basic assumption (that the comet would be visible in the future), rendering the contract voidable."
    },
    // FACT PATTERN 3 (Q5-Q7)
    {
        id: 5,
        topic: "Performance / Prevention of Express Condition",
        fp: "Buyer agrees to purchase 100 gallons of highly refined commercial solvent from Seller for $50,000, expressly conditioned upon an independent lab certifying the solvent is 'exactly 100.0% pure.' Seller delivers the solvent. To avoid paying, Buyer secretly pays the lab technician $5,000 to falsify the results and certify the solvent as only 99.9% pure. Buyer then refuses to pay Seller.",
        q: "Must Buyer pay the $50,000 to Seller?",
        opts: [
            "No, because express conditions strictly require literal compliance, shielding the buyer from liability.",
            "No, because the independent lab possesses exclusive arbitral authority over the transaction.",
            "Yes, but the seller's recovery is limited strictly to quantum meruit.",
            "Yes, under the prevention doctrine, because Buyer wrongfully hindered the occurrence of the condition in bad faith, legally excusing it."
        ],
        ans: 3,
        exp: "Under the prevention doctrine, if a party whose duty is subject to a condition wrongfully (in bad faith) prevents or hinders the occurrence of that condition (like bribing the lab to falsify results), the condition is legally excused. The Buyer must pay the full contract price as if the condition had been perfectly satisfied."
    },
    {
        id: 6,
        topic: "Performance / Retraction of Waiver",
        fp: "Buyer agrees to purchase 100 gallons of highly refined commercial solvent from Seller for $50,000, expressly conditioned upon an independent lab certifying the solvent is 'exactly 100.0% pure.' Seller delivers the solvent.\n\nAssume Buyer did not bribe the lab. Before the lab tested the solvent, Buyer told Seller, 'Don't worry about the lab test, I'll pay you anyway.' The next day, before Seller materially relied on the statement and before the lab deadline arrived, Buyer retracted his waiver.",
        q: "Is Buyer's retraction of the waiver legally effective?",
        opts: [
            "Yes, a party may retract a waiver of an executory condition at any time before the time for occurrence has passed, provided the other party has not materially changed position in detrimental reliance.",
            "No, because waivers of express conditions are permanent and irrevocable once communicated to a commercial counterparty.",
            "No, because the retraction violates the implied covenant of good faith and fair dealing.",
            "Yes, but only if the retraction is formally notarized."
        ],
        ans: 0,
        exp: "A party who waives a condition that is not yet due to occur can retract that waiver and reinstate the condition, AS LONG AS they provide reasonable notice AND the other party has not yet materially changed their position in detrimental reliance on the waiver. Since Seller hadn't changed behavior, Buyer can successfully retract."
    },
    {
        id: 7,
        topic: "Performance / Novation vs. Delegation",
        fp: "Buyer agrees to purchase 100 gallons of highly refined commercial solvent from Seller for $50,000, expressly conditioned upon an independent lab certifying the solvent is 'exactly 100.0% pure.'\n\nAssume Buyer validly delegated his duty to pay the $50,000 to a third-party Corporation, and Buyer notified Seller of this delegation. Seller silently accepted the 99.9% pure solvent payment from Corporation. Corporation's check ultimately bounced.",
        q: "Can Seller still sue Buyer for the $50,000?",
        opts: [
            "No, because the original buyer permanently lost direct privity of contract.",
            "Yes, because mere silent acceptance of performance from a delegate does not constitute a valid novation releasing the original obligor.",
            "No, because the seller's silent acceptance established an implied-in-fact novation.",
            "Yes, but only under the theory of strict vicarious liability."
        ],
        ans: 1,
        exp: "A valid delegation of duties does NOT relieve the original obligor (Buyer) of liability. The obligor remains secondarily liable as a surety if the delegate (Corporation) fails to perform properly. To completely escape liability, there must be a 'novation'—a clear, explicit agreement among all three parties releasing the original obligor. Mere silent acceptance of performance from the delegate is insufficient for a novation."
    },
    // FACT PATTERN 4 (Q8-Q9)
    {
        id: 8,
        topic: "Third Parties / Assignment of Accounts (UCC § 9-406)",
        fp: "Client hires a famous architect to design a custom mansion for $100,000. The contract contains a prominent clause stating: 'Any assignment of this contract or the rights hereunder is absolutely VOID.' Architect designs the mansion perfectly. Architect then assigns the right to receive the $100,000 payment to Local Bank. Client refuses to pay Bank, citing the 'void' clause.",
        q: "Is the assignment of the payment right to the Bank valid?",
        opts: [
            "No, because the explicitly drafted 'void' language successfully destroys the underlying power of assignment.",
            "No, because the underlying service was highly specialized and intensely personal in nature.",
            "Yes, because under UCC Article 9, a term in a contract restricting the assignment of an account (the right to receive payment for services rendered) is wholly ineffective, regardless of 'void' language.",
            "Yes, provided the bank agrees to entirely indemnify the client against secondary litigation."
        ],
        ans: 2,
        exp: "This is a very advanced nuance. Normally, common law says the magic word 'VOID' destroys the power to assign. HOWEVER, UCC § 9-406(d) governs the assignment of 'accounts' (the right to payment for goods sold or services rendered). Under Article 9, any contract term that prohibits, restricts, or requires consent for the assignment of an account is completely INEFFECTIVE. The right to get paid is always freely assignable."
    },
    {
        id: 9,
        topic: "Third Parties / Vesting of Beneficiary Rights",
        fp: "Client hires a famous architect to design a custom mansion for $100,000. The contract contains a prominent clause stating: 'Any assignment of this contract or the rights hereunder is absolutely VOID.' Architect designs the mansion perfectly.\n\nAssume instead the contract explicitly required Client to pay the $100,000 directly to Architect's daughter. Daughter hears about this from a friend. Before she takes any action or assents to the contract, Client and Architect mutually agree to cancel the agreement.",
        q: "Can the daughter successfully sue to enforce the payment?",
        opts: [
            "Yes, because donee beneficiaries are immune from contract modifications.",
            "No, because the original contracting parties retain the absolute, unqualified right to modify or cancel the agreement at any time.",
            "Yes, because her explicit knowledge of the contract caused her third-party rights to legally vest prior to the cancellation.",
            "No, because a beneficiary's rights do not vest merely upon acquiring knowledge of the contract; they must materially rely, assent, or initiate litigation before their rights are legally cemented."
        ],
        ans: 3,
        exp: "The original contracting parties can modify or cancel a contract without the third-party beneficiary's consent UNTIL the beneficiary's rights have 'vested.' Under the Restatement, rights vest only when the beneficiary (1) materially relies on the promise, (2) brings suit upon it, or (3) assents to it at the request of the promisor or promisee. Mere knowledge of the contract is insufficient to vest rights."
    },
    // FACT PATTERN 5 (Q10-Q11)
    {
        id: 10,
        topic: "Remedies / Lost Volume Seller (UCC 2-708(2))",
        fp: "Retailer has an unlimited supply of standard, mass-produced refrigerators in a massive warehouse. Buyer contracts to purchase one for $2,000. Buyer breaches and refuses to pay. Retailer immediately resells the exact same refrigerator to another customer for $1,900.",
        q: "What amount is Retailer legally entitled to recover from Buyer?",
        opts: [
            "The seller is entitled to the lost profit from the breached sale, minus any incidental costs saved, under the lost volume seller doctrine.",
            "Only $100, representing the direct mathematical difference between the contract price and the eventual resale value.",
            "Zero damages, because the successful mitigation effectively neutralized the commercial detriment.",
            "The full $2,000 contract price, provided the goods are securely tendered to the judicial escrow account."
        ],
        ans: 0,
        exp: "Under UCC § 2-708(2), if the standard measure of damages (contract minus resale) is inadequate to put the seller in as good a position as performance would have done, a 'lost volume seller' (one with unlimited supply) can recover their LOST PROFIT. The $100 difference is inadequate because Retailer would have made TWO profits on TWO sales if Buyer hadn't breached."
    },
    {
        id: 11,
        topic: "Remedies / Consequential Damages Waiver (UCC 2-719)",
        fp: "Retailer has an unlimited supply of standard, mass-produced refrigerators in a massive warehouse. Buyer contracts to purchase one for $2,000. Buyer breaches and refuses to pay.\n\nAssume instead the Buyer is a commercial bakery purchasing a custom oven from a Manufacturer. The contract contains a bold, conspicuous clause: 'MANUFACTURER IS NOT LIABLE FOR ANY CONSEQUENTIAL DAMAGES OR LOST PROFITS.' The oven is defective, destroying the bakery's business for a week ($50,000 in lost profits).",
        q: "Is the consequential damages waiver enforceable?",
        opts: [
            "No, because courts universally invalidate limitations that produce a severely disproportionate commercial forfeiture.",
            "Yes, because between commercial parties, clauses limiting or excluding consequential damages are generally valid unless proven to be unconscionable.",
            "No, because the Uniform Commercial Code explicitly prohibits all limitations on expectation damages.",
            "Yes, provided the manufacturer grants a complete refund of the primary purchase price."
        ],
        ans: 1,
        exp: "Under UCC § 2-719(3), consequential damages may be limited or excluded unless the limitation or exclusion is unconscionable. Limitation of consequential damages for commercial loss between merchants/businesses is generally valid and not prima facie unconscionable (unlike limiting damages for personal injury in consumer goods)."
    },
    // FACT PATTERN 6 (Q12-Q14)
    {
        id: 12,
        topic: "Formation / UCC Modification Without Consideration",
        fp: "Supplier agrees to deliver 1,000 circuit boards to TechCorp for $5 each. Before delivery, the market price of the raw materials spikes dramatically. Supplier calls TechCorp, honestly explaining he will face severe losses unless the price is increased to $6. TechCorp agrees to the modification in a signed writing. Supplier delivers the goods, but TechCorp refuses to pay the extra $1.",
        q: "Is the $1 price modification legally enforceable?",
        opts: [
            "No, because the preexisting duty rule rigidly invalidates modifications lacking fresh consideration.",
            "No, because the original $5 price established a commercial ceiling.",
            "Yes, because under the Uniform Commercial Code, an agreement modifying a contract for the sale of goods needs no consideration to be binding, provided it is sought in good faith.",
            "Yes, but only under the doctrine of strict quasi-contractual restitution."
        ],
        ans: 2,
        exp: "Unlike the common law preexisting duty rule, UCC § 2-209(1) allows contracts for the sale of goods to be modified WITHOUT consideration, provided the modification is made in good faith. A severe market shift prompting an honest request to avoid losses is a classic example of a good faith modification."
    },
    {
        id: 13,
        topic: "Discharge / Accord and Satisfaction (Undisputed Debt)",
        fp: "Supplier agrees to deliver 1,000 circuit boards to TechCorp for $5 each. Before delivery, the market price of the raw materials spikes dramatically. Supplier calls TechCorp, honestly explaining he will face severe losses unless the price is increased to $6. TechCorp agrees to the modification in a signed writing. Supplier delivers the goods, but TechCorp refuses to pay the extra $1.\n\nAssume instead TechCorp admitted it legally owed Supplier exactly $6,000 (a liquidated, undisputed debt). TechCorp mails Supplier a check for $4,000 conspicuously marked: 'Cashing this check constitutes payment in full.' Supplier cashes it and sues for the $2,000 balance.",
        q: "Does cashing the check discharge the remaining $2,000 debt?",
        opts: [
            "Yes, because physical negotiation of a check legally waives statutory remedies.",
            "Yes, because an accord and satisfaction is conclusively achieved.",
            "No, because the debtor failed to provide a formal promissory note for the remainder.",
            "No, because an agreement to accept a lesser amount in full satisfaction of a liquidated and undisputed debt lacks consideration under the preexisting duty rule."
        ],
        ans: 3,
        exp: "An accord and satisfaction via a 'payment in full' check only works if the debt is unliquidated or subject to a bona fide dispute. If a debt is liquidated (undisputed and certain in amount), accepting a lesser amount lacks consideration. The debtor is merely doing what they are already legally bound to do, providing no new detriment to support forgiving the remainder."
    },
    {
        id: 14,
        topic: "Consideration / Common Law Modification (Unforeseen Difficulty)",
        fp: "Supplier agrees to deliver 1,000 circuit boards to TechCorp for $5 each. Before delivery, the market price of the raw materials spikes dramatically. Supplier calls TechCorp, honestly explaining he will face severe losses unless the price is increased to $6. TechCorp agrees to the modification in a signed writing. Supplier delivers the goods, but TechCorp refuses to pay the extra $1.\n\nAssume the contract was not for circuit boards, but for Excavator to dig a trench for Owner for $10,000. Excavator discovers buried, highly classified military ordinance that will cost $5,000 to safely remove. Owner orally agrees to pay the extra $5,000, then refuses.",
        q: "Is the oral modification to pay the extra $5,000 enforceable?",
        opts: [
            "Enforceable because the discovery of buried military ordinance constitutes a severe, unanticipated difficulty that legally excuses the preexisting duty rule.",
            "Unenforceable because the preexisting duty rule strictly requires independent financial consideration.",
            "Unenforceable because any agreement exceeding five hundred dollars must be executed via formal notarization.",
            "Enforceable because the commercial frustration doctrine automatically doubles the contract price."
        ],
        ans: 0,
        exp: "Under common law, modifications generally require new consideration (the preexisting duty rule). However, a widely recognized exception exists for 'unforeseen difficulties.' When a severe, highly unanticipated circumstance arises (like classified ordinance) that makes performance extremely burdensome, a modification is enforceable without new consideration."
    },
    // FACT PATTERN 7 (Q15-Q16)
    {
        id: 15,
        topic: "Formation / UCC Firm Offer Limit",
        fp: "Merchant A sends a signed, written offer to Merchant B stating: 'I offer to supply 500 laptops for $500 each. I guarantee this offer will be held open for five months.' Merchant B pays no consideration. On day 110 (month four), Merchant A formally revokes the offer. On day 120, Merchant B faxes an acceptance.",
        q: "Was Merchant A's revocation on day 110 legally effective?",
        opts: [
            "No, because the explicit inclusion of a deadline generates an irrebuttable presumption of mutual assent.",
            "The revocation was effective because under the UCC firm offer rule, the maximum period of irrevocability without independent consideration is strictly limited to three months.",
            "No, because written promises by merchants bypass all traditional common law consideration constraints indefinitely.",
            "Yes, because the five-month time limit violated standard federal antitrust regulations."
        ],
        ans: 1,
        exp: "Under UCC § 2-205 (Firm Offer), a merchant's signed, written offer assuring it will be held open is irrevocable without consideration. However, the period of irrevocability cannot exceed three months (90 days). Because the revocation occurred on day 110, after the 3-month statutory limit expired, the offer had become revocable, making the revocation effective."
    },
    {
        id: 16,
        topic: "Formation / Option Contract with Nominal Consideration",
        fp: "Merchant A sends a signed, written offer to Merchant B stating: 'I offer to supply 500 laptops for $500 each. I guarantee this offer will be held open for five months.' Merchant B pays no consideration. On day 110 (month four), Merchant A formally revokes the offer. On day 120, Merchant B faxes an acceptance.\n\nAssume instead the written offer stated: 'In exchange for $1, receipt of which is hereby acknowledged, I grant you an option to purchase these laptops for five months.' The $1 was entirely a sham and was never actually paid. Merchant A revoked in month two.",
        q: "Under the modern Restatement approach to option contracts, is the offer legally irrevocable?",
        opts: [
            "No, because the failure to pay the required funds constitutes a material breach.",
            "No, because options must be supported by substantial equity.",
            "Under the Restatement, a mere written recital of purported consideration is generally sufficient to create a binding short-term option contract, rendering the revocation ineffective.",
            "Yes, because sham consideration automatically invalidates the underlying substantive transaction."
        ],
        ans: 2,
        exp: "This tests a crucial Restatement nuance. Under Restatement (Second) of Contracts § 87(1), an offer is binding as an option contract if it is in writing and signed by the offeror, recites a purported consideration for the making of the offer (like '$1, receipt acknowledged'), and proposes an exchange on fair terms within a reasonable time. The mere recital is sufficient to hold the option open, even if the $1 was never actually paid."
    },
    // FACT PATTERN 8 (Q17-Q19)
    {
        id: 17,
        topic: "Terms / Parol Evidence Rule (Condition to Performance vs Formation)",
        fp: "Buyer and Seller execute a fully integrated written contract for a boat. The contract states: 'Buyer shall pay $10,000 on June 1.' Prior to signing, Buyer orally stated, 'I'll sign this document, but I won't pay the $10,000 on June 1 unless my tax refund arrives first.' Seller agreed. The tax refund does not arrive.",
        q: "Can Buyer introduce evidence of this oral statement to avoid paying on June 1?",
        opts: [
            "Yes, because parol evidence is always admissible to prove any type of unfulfilled condition.",
            "No, because the integration clause strictly seals the final written document.",
            "Yes, because the oral condition modifies the delivery schedule rather than the core price term.",
            "The evidence is inadmissible because it contradicts the absolute payment obligation written in the fully integrated contract; the exception applies only to conditions to the formation of the entire contract, not conditions to a specific performance duty."
        ],
        ans: 3,
        exp: "A crucial PER distinction: Extrinsic evidence is admissible to show an oral condition precedent to the FORMATION or legal existence of the entire contract. However, evidence of an oral condition precedent to a specific PERFORMANCE duty (e.g., 'I won't pay unless X happens') contradicts an absolute duty written in the contract ('Buyer shall pay $10k on June 1') and is barred by the Parol Evidence Rule."
    },
    {
        id: 18,
        topic: "Terms / Trade Usage vs Express Terms",
        fp: "Buyer and Seller execute a fully integrated written contract for a boat. The contract states: 'Buyer shall pay $10,000 on June 1.' Prior to signing, Buyer orally stated, 'I'll sign this document, but I won't pay the $10,000 on June 1 unless my tax refund arrives first.' Seller agreed. The tax refund does not arrive.\n\nAssume instead the contract was for '500 standard wooden planks' at a set price. The buyer claims that in the local lumber industry, 'standard' universally means perfectly smooth, sanded planks (trade usage). The seller delivered rough planks.",
        q: "Can the buyer introduce this trade usage evidence to supplement the integrated contract?",
        opts: [
            "Yes, because under the UCC, even completely integrated contracts may be explained or supplemented by evidence of a consistent usage of trade.",
            "No, because the Parol Evidence Rule strictly prohibits contradicting plain English vocabulary.",
            "Yes, but only if the contract lacked a formal integration clause.",
            "No, because the term 'standard' is legally unambiguous and strictly requires a literal interpretation."
        ],
        ans: 0,
        exp: "Under UCC § 2-202, even if a written contract is completely integrated, it may ALWAYS be explained or supplemented by course of dealing, usage of trade (industry custom), or course of performance, unless the written terms specifically negate them."
    },
    {
        id: 19,
        topic: "Terms / Effect of Breach on Risk of Loss (UCC 2-510)",
        fp: "Buyer and Seller execute a fully integrated written contract for a boat. The contract states: 'Buyer shall pay $10,000 on June 1.' Prior to signing, Buyer orally stated, 'I'll sign this document, but I won't pay the $10,000 on June 1 unless my tax refund arrives first.' Seller agreed. The tax refund does not arrive.\n\nAssume the contract was for the boat, to be delivered 'FOB Buyer's Marina.' The boat is shipped but is highly defective. Buyer immediately rejects the boat upon arrival. While sitting on Buyer's dock awaiting return shipping, lightning strikes and destroys the boat.",
        q: "Who bears the risk of loss for the destroyed boat?",
        opts: [
            "The buyer, because the risk of loss legally transferred the exact moment the goods were tendered at the destination.",
            "The seller bears the risk of loss because the tender of non-conforming goods gives the buyer the right of rejection, preventing the risk from passing to the buyer.",
            "The shipping carrier, due to strict absolute liability for all weather-related transit failures.",
            "The risk is split evenly under the doctrine of comparative commercial fault."
        ],
        ans: 1,
        exp: "Under UCC § 2-510, if a tender or delivery of goods so fails to conform to the contract as to give a right of rejection, the risk of their loss remains on the seller until cure or acceptance. Because the boat was highly defective, the Buyer validly rejected it, meaning the risk of loss never passed to the Buyer despite it reaching the destination."
    },
    // FACT PATTERN 9 (Q20-Q22)
    {
        id: 20,
        topic: "Performance / Perfect Tender Rule & Accommodation (UCC 2-206)",
        fp: "Retailer emails a purchase order to Supplier for 500 red laptops. Supplier replies by immediately shipping 500 silver laptops. Included in the boxes is a clear, conspicuous note stating: 'We are out of red. Sending silver laptops as an accommodation. Please accept or return at our expense.' Retailer is furious.",
        q: "Did Supplier's shipment of the silver laptops constitute a breach of contract?",
        opts: [
            "Yes, because under the perfect tender rule, shipping non-conforming goods is an automatic material breach.",
            "Yes, because the electronic communications failed to align with the physical delivery.",
            "The shipment does not constitute a breach, but rather serves as a valid counteroffer because the supplier clearly notified the buyer that the non-conforming shipment was offered only as an accommodation.",
            "No, because commercial sellers are granted an absolute 30-day grace period to rectify superficial color variations."
        ],
        ans: 2,
        exp: "Under UCC § 2-206(1)(b), an order for prompt shipment invites acceptance either by a prompt promise to ship or by the prompt shipment of goods. While shipping non-conforming goods generally acts as an acceptance AND a breach simultaneously, if the seller seasonably notifies the buyer that the shipment is offered only as an 'accommodation,' the shipment acts strictly as a counteroffer, not a breach."
    },
    {
        id: 21,
        topic: "Performance / Right to Cure After Expiration (UCC 2-508)",
        fp: "Retailer emails a purchase order to Supplier for 500 red laptops. Supplier replies by immediately shipping 500 silver laptops. Included in the boxes is a clear, conspicuous note stating: 'We are out of red. Sending silver laptops as an accommodation. Please accept or return at our expense.' Retailer is furious.\n\nAssume instead Supplier shipped silver laptops without any accommodation note. Retailer rejects them. The delivery arrived exactly on the contract deadline (October 1). Supplier immediately calls and says, 'I will send red ones by October 5.' Supplier had sent silver laptops in three previous orders, and Retailer had always happily accepted them.",
        q: "Does Supplier have a legal right to cure the defective delivery by October 5?",
        opts: [
            "No, because the right to cure strictly expires concurrently with the contractual performance deadline.",
            "No, because course of dealing cannot override explicit color specifications.",
            "Yes, but only if the retailer formally consents in a notarized writing.",
            "Yes, because the seller had reasonable grounds to believe the non-conforming tender would be acceptable based on prior dealings, granting them a further reasonable time to substitute a conforming tender."
        ],
        ans: 3,
        exp: "Under UCC § 2-508(2), if the time for performance HAS expired, a seller generally cannot cure. However, a major exception exists: if the seller had reasonable grounds to believe the non-conforming tender would be acceptable (often based on prior course of dealing where the buyer accepted the exact same defect), the seller is granted a 'further reasonable time' to substitute a conforming tender."
    },
    {
        id: 22,
        topic: "Performance / Anticipatory Repudiation (Demanding Assurances)",
        fp: "Retailer emails a purchase order to Supplier for 500 red laptops. Supplier replies by immediately shipping 500 silver laptops. Included in the boxes is a clear, conspicuous note stating: 'We are out of red. Sending silver laptops as an accommodation. Please accept or return at our expense.' Retailer is furious.\n\nAssume before any laptops were shipped, Retailer called Supplier and demanded written assurances that the laptops would be red. Supplier refused. Retailer had no reasonable grounds for insecurity; he was just being overly anxious.",
        q: "Was Supplier's refusal to provide assurances an anticipatory repudiation?",
        opts: [
            "No, because the retailer's demand was legally invalid since it lacked any objectively reasonable grounds for commercial insecurity.",
            "Yes, because any explicit refusal to provide written assurances automatically constitutes a total breach under the Uniform Commercial Code.",
            "Yes, because the buyer's profound anxiety satisfies the subjective test.",
            "No, because assurances must be requested via a formal judicial filing."
        ],
        ans: 0,
        exp: "Under UCC § 2-609, a party may demand adequate assurances ONLY IF they have 'reasonable grounds for insecurity.' If a party makes a demand without reasonable grounds (just being anxious), the other party is not legally obligated to respond. Thus, the refusal to respond does not constitute an anticipatory repudiation."
    },
    // FACT PATTERN 10 (Q23-Q25)
    {
        id: 23,
        topic: "Remedies / Liquidated Damages (Penalty)",
        fp: "City hires Contractor to build a decorative fountain for $50,000. The contract contains a clause: 'If Contractor breaches, Contractor must pay a massive $100,000 penalty immediately.' Contractor breaches. The actual damage to the city is entirely zero.",
        q: "Is the liquidated damages clause enforceable?",
        opts: [
            "Yes, because sophisticated parties freely agreed to the terms.",
            "Unenforceable because the amount is grossly disproportionate to actual harm and explicitly functions as a punitive penalty.",
            "Yes, because municipal contracts inherently demand strict schedule adherence.",
            "No, because it was not explicitly approved by a judicial officer prior to the breach."
        ],
        ans: 1,
        exp: "Liquidated damages clauses are only enforceable if actual damages were difficult to estimate at formation AND the specified amount is a reasonable forecast of compensatory damages. A $100,000 penalty on a $50,000 contract is grossly disproportionate to any actual harm, making it an unenforceable penalty clause."
    },
    {
        id: 24,
        topic: "Remedies / Specific Performance (UCC)",
        fp: "City hires Contractor to build a decorative fountain for $50,000. The contract contains a clause: 'If Contractor breaches, Contractor must pay a massive $100,000 penalty immediately.' Contractor breaches. The actual damage to the city is entirely zero.\n\nAssume instead a private Collector contracted to buy a one-of-a-kind historic painting from Art Gallery. Art Gallery breaches and refuses to hand over the painting.",
        q: "What is Collector's best remedy?",
        opts: [
            "Punitive damages.",
            "Liquidated damages.",
            "Specific performance, because the goods are entirely unique and monetary damages are legally inadequate.",
            "A writ of habeas corpus."
        ],
        ans: 2,
        exp: "Under UCC § 2-716, a buyer may obtain the equitable remedy of specific performance where the goods are unique or in other proper circumstances. Because the historic painting is entirely one-of-a-kind and cannot be replaced (no adequate remedy at law via cover), the court will order the Art Gallery to deliver the specific painting."
    },
    {
        id: 25,
        topic: "Defenses / Statute of Frauds (One-Year Lifetime Exception)",
        fp: "City hires Contractor to build a decorative fountain for $50,000. The contract contains a clause: 'If Contractor breaches, Contractor must pay a massive $100,000 penalty immediately.' Contractor breaches. The actual damage to the city is entirely zero.\n\nAssume instead that a CEO orally promised his loyal assistant: 'I will employ you for the rest of your natural life.' The assistant worked for two years, and then the CEO fired him without cause.",
        q: "Does the Statute of Frauds bar the enforcement of this oral lifetime employment contract?",
        opts: [
            "Yes, because employment arrangements exceeding twelve consecutive months strictly require formal notarization.",
            "Yes, because the monetary aggregate over a lifetime significantly surpasses standard statutory minimums.",
            "No, because the employee successfully fulfilled a continuous two-year tenure.",
            "No, because the employee could theoretically die tomorrow, meaning the contract is fully capable of being performed within one year, exempting it from the statute."
        ],
        ans: 3,
        exp: "The Statute of Frauds requires a signed writing for contracts that CANNOT possibly be fully performed within one year from the date of formation. A contract for 'life' is capable of being fully performed within one year (if the employee dies the next day). Therefore, lifetime employment contracts do not fall within the one-year provision of the Statute of Frauds and are enforceable even if oral."
    }
];