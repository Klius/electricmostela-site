<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/page">
	<html>
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
			<title>Electric Mostela</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href="/favicon.gif" type="image/gif" />
			<link rel="stylesheet" href="css/styletto.css" type="text/css"/>
		</head>
		<body bgcolor="#FFFF66">
			<xsl:for-each select="grade">
			
				<h2><xsl:value-of select="name"/></h2>
				<xsl:for-each select="course">
					<h4><xsl:value-of select="name"/></h4>
					<ol>
					<xsl:for-each select="exercises/exercise">
						<li> 
							<xsl:element name="a">
    							<xsl:attribute name="href">
        							<xsl:value-of select="link"/>
    							</xsl:attribute>
   								<xsl:value-of select="name"/>
							</xsl:element>
							<strong> --> </strong><span><xsl:value-of select="comentari"/></span>
						</li>
					</xsl:for-each>
					</ol>
				</xsl:for-each >
			</xsl:for-each>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>
